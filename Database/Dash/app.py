import dash
import dash_core_components as dcc
import dash_html_components as html
import flask
from pymongo import MongoClient
import pandas as pd
import plotly.express as px

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

client = MongoClient("mongodb://db",27017)
client.list_database_names()
db = client.Movies
collectNames=db.list_collection_names()

collection = db['movies']
cantidad=collection.find({"original_language": "en"}).count()

data = pd.DataFrame(list(collection.find()))

server = flask.Flask(__name__)
app = dash.Dash(__name__, server=server,external_stylesheets=external_stylesheets)
app.config.suppress_callback_exceptions = True

df = px.data.tips()

fig = px.bar(data, x="original_title", y="popularity",  barmode="group")
fig2 = px.scatter(data,x="release_date",y="popularity")
fig3 = px.scatter(data,x="original_language",y="popularity")

app.layout = html.Div(children=[
    html.H1('Dash wep app Proyecto final PC2'),



    dcc.Graph(
        id='graph-one',
        figure=fig
    ),
    dcc.Graph(
        id='graph-two',
        figure=fig2
    ),
    dcc.Graph(
        id='graph-three',
        figure=fig3
    )
])

if __name__ == '__main__':
    app.run_server(host='0.0.0.0',debug=True, port=8080)