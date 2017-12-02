---
layout: post
title: "Get Exchange Rates with currencylayer API in Python"
tags: [api, python, requests]
categories:
- blog
---

There're a fairly large number of APIs offering real-time and historical currency exchange rate out there. [currencylayer API](https://currencylayer.com/) is one of the best. It's an easy-to-use JSON API supporting 168 currencies, delivering accurate, reliable and consistent currency exchange rates.

This article aims to share the basics of using the currencylayer API in Python with the Requests library to get live and historical quotes.

(For comparisons in currency exchange rate APIs, see [Free and Paid Currency Converter API Comparison](http://www.freecurrencyconverterapi.com/).)

## 1. Get currencylayer API

To get started, we first need to get our currencylayer API access key from its website. 

The sign up procedure is very simple. From currencylayer's homepage, we navigate to [Start using the API](https://currencylayer.com/product) and select the [Free Plan](https://currencylayer.com/signup?plan=1). The free plan supports live and historical quotes of 1,000 API Requests per month.

After creating an account, we log in to our [Account Dashboard](https://currencylayer.com/dashboard) and there we find our API Access Key. 

## 2. Import Requests Library

To access the API in python, we need to import the [Requests](http://docs.python-requests.org/) library.


{% highlight python %}
import requests
{% endhighlight %}

For those who are new to Requests, it is a simple and elegant Python HTTP library to grab, post, stream, and connect to secure web pages. If you don't have it installed, you may easily install it with the `pip install requests` command.

We also store our currenclayer API key as a variable for easier access.

```python
api = '2639ccac02d7c15359d45f9a2bc9d8ea'
```

## 3. Get Live Quote

Now we're all set. Let's try to get a live quote with our API key.

This is the "live" request URL as documented on currencylayer's website.

```python
http://apilayer.net/api/live

    ? access_key = YOUR_ACCESS_KEY
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1
```

We'll use the `requests.get` method to get the JSON response. 

First, we store all the values of the required parameters in a dict. We should input all our target currencies as a string, seperated by a '`,`'.


{% highlight python %}
params = {'access_key': api, 'currencies': 'USD,EUR,CNY,HKD', 'format': 1}
{% endhighlight %}

We create a response object `r` using `requests.get`.


{% highlight python %}
r = requests.get('http://apilayer.net/api/live', params = params)
{% endhighlight %}

We encode our response in json using the `r.json` method. And here we get our live quote stored in a dict.


{% highlight python %}
livequote = r.json()
{% endhighlight %}


{% highlight python %}
# livequote
{u'privacy': u'https://currencylayer.com/privacy',
 u'quotes': {u'USDCNY': 6.653204,
  u'USDEUR': 0.852304,
  u'USDHKD': 7.804504,
  u'USDUSD': 1},
 u'source': u'USD',
 u'success': True,
 u'terms': u'https://currencylayer.com/terms',
 u'timestamp': 1507467546}
{% endhighlight %}


We can easily access our stored data using Python dict methods.


{% highlight python %}
livequote['quotes']['USDCNY']
{% endhighlight %}



## 4. Get Historical Quote

It's equally easy to get a historical quote with our API key.

The request URL is changed as below. We just need to change the url and pass an extra parameter of date to our request.


{% highlight python %}
http://apilayer.net/api/historical

    ? access_key = YOUR_ACCESS_KEY
    & date = YYYY-MM-DD
    & currencies = USD,AUD,CAD,PLN,MXN
    & format = 1
{% endhighlight %}

We use the same requests method to get the JSON-encoded dict of the exchange rate on a historical date.


{% highlight python %}
params = {'access_key': api, 'date': '2017-10-01', 'currencies': 'USD,EUR,CNY,HKD', 'format': 1}
r = requests.get('http://apilayer.net/api/historical', params = params)
histquote = r.json()
{% endhighlight %}


{% highlight python %}
# histquote
{u'date': u'2017-10-01',
 u'historical': True,
 u'privacy': u'https://currencylayer.com/privacy',
 u'quotes': {u'USDCNY': 6.653198,
  u'USDEUR': 0.846697,
  u'USDHKD': 7.810304,
  u'USDUSD': 1},
 u'source': u'USD',
 u'success': True,
 u'terms': u'https://currencylayer.com/terms',
 u'timestamp': 1506902399}
{% endhighlight %}