#!/usr/bin/env python
# coding: utf-8

# In[66]:


import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from keras.preprocessing.sequence import TimeseriesGenerator
import math
import xgboost as xgb
from xgboost import plot_importance, plot_tree
from sklearn.metrics import mean_squared_error
import json


# In[67]:
def get_trained(s):

    data=pd.read_csv('archive/historical_data/HISTORICAL_DATA/'+s+'_data.csv')

    df=pd.read_csv('archive/historical_data/HISTORICAL_DATA/'+s+'_data.csv')
    
    df.dropna(inplace=True)
    
    df['high']=(df['high']+df['low'])/2
    

    df.rename(columns={'high': 'price'
                    },
            inplace=True, errors='raise')

    df=df.drop(['open','low','close','adj_close','volume'],axis=1)
    

    df=df[-350:]
    
    Dates=np.array(df['Date'])
 
    Price=np.array(df['price'])


    Dates=np.array(Dates).tolist()


    Price=np.array(Price).tolist()

    Last=Price[-1]

    Chart1={"Dates":Dates,"Prices":Price}

    data.head()


    data.isnull().any()


    data.dropna(inplace=True)
    data.isnull().any()



    high=np.array(data['high'])
    low=np.array(data['low'])
    price=(high+low)/2


    train_perc=math.floor(data['high'].count()*0.9)
    train_perc


    train_data=price[0:train_perc]
    test_data=price[train_perc:]


    sc=MinMaxScaler(feature_range=(0,1))
    train_data=train_data.reshape(-1,1)
    test_data=test_data.reshape(-1,1)
    train_data=sc.fit_transform(train_data)
    test_data=sc.fit_transform(test_data)


    def create_dataset(data,shuffle=False):
        gen=TimeseriesGenerator(data,data,length=10,shuffle=False)
        X=[]
        Y=[]
        for i in range(len(gen)):
            a,b=gen[i]
            for j in range(a.shape[0]):
                X.append(a[j])
                Y.append(b[j])
        
        return np.array(X),np.array(Y)


    X_train,Y_train=create_dataset(train_data)
    X_test,Y_test=create_dataset(test_data)

    print(X_train.shape,Y_train.shape)
    print(X_test.shape,Y_test.shape)


    X_train=X_train.reshape(-1,10)
    X_test=X_test.reshape(-1,10)
    Y_train=Y_train.reshape(-1,1)
    Y_test=Y_test.reshape(-1,1)


    xgmodel = xgb.XGBRegressor(objective='reg:squarederror',learning_rate=0.05,max_depth=15,n_estimators=200,verbose=False)


    xgmodel.fit(X_train,Y_train)

    y_pred=xgmodel.predict(X_test)


    def future_predict(data,model):
        output=[]
        for i in range(10):
            data=data[-10:]
            pred=model.predict(data.reshape(1,10))
            output.append(pred)
            data=np.concatenate([data,np.array(pred).reshape(-1,1)],axis=0)
        return output


    average=sc.fit_transform(price.reshape(-1,1))


    predictions=future_predict(average[-50:],xgmodel)


    a = np.array( predictions )
    Preds=a.ravel() 
    Preds




    u=average[-100:]
    v=np.concatenate([u,np.array(predictions)])


    res=u[-10:]
    res=res.ravel()
    Chart2=np.concatenate([res,Preds],axis=0)
    Chart2=np.array(Chart2).tolist()
    Chart2

    past_values=sc.inverse_transform(u)
    future_values=sc.inverse_transform(v)


    Error=mean_squared_error(Y_test,y_pred)


    Stock_Summary={
        "chart1":Chart1,
        "chart2":Chart2,
        "Error":Error,
        "Curr_Price":Last
    }


    Stock_Summary_json=json.dumps(Stock_Summary)


    return Stock_Summary_json

