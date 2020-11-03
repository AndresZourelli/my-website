from bs4 import BeautifulSoup
import requests
from slack import WebClient
import time

import slack


def product_availability():
    slack_web_client = WebClient(
        token="xoxb-310216681603-1478388747284-fAynVpsotWXILtXGYTvr5XXT")
    slack_web_client.conversations_join(channel="C01DWGBDTTM")

    try:
        response = slack_web_client.chat_postMessage(
            channel="C01DWGBDTTM", text=f"I am running...", link_names=True)
    except Exception as e:
        assert e.response["error"]

    while True:
        msi = requests.get(
            "https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595?Description=3090&cm_re=3090-_-14-137-595-_-Product")
        asus = requests.get(
            "https://www.newegg.com/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454?Description=3090&cm_re=3090-_-14-126-454-_-Product")

        soup1 = BeautifulSoup(msi.content, 'html.parser')
        soup2 = BeautifulSoup(asus.content, 'html.parser')

        results1 = soup1.find("div", id="ProductBuy")
        results1 = results1.find(
            "button", {"class": "btn btn-primary btn-wide"})

        results2 = soup2.find("div", id="ProductBuy")
        results2 = results2.find(
            "button", {"class": "btn btn-primary btn-wide"})

        if(results1 and results1.text.strip() == "Add to cart"):
            try:
                response = slack_web_client.chat_postMessage(
                    channel="C01DWGBDTTM", text=f"<@U95AYKQT1> MSI 3090 https://www.newegg.com/msi-geforce-rtx-3090-rtx-3090-gaming-x-trio-24g/p/N82E16814137595?Description=3090&cm_re=3090-_-14-137-595-_-Product", link_names=True)
            except Exception as e:
                assert e.response["error"]
        if(results2 and results2.text.strip() == "Add to cart"):
            try:
                response = slack_web_client.chat_postMessage(
                    channel="C01DWGBDTTM", text="<@U95AYKQT1> ASUS 3090 https://www.newegg.com/asus-geforce-rtx-3090-tuf-rtx3090-o24g-gaming/p/N82E16814126454?Description=3090&cm_re=3090-_-14-126-454-_-Product", link_names=True)
            except Exception as e:
                assert e.response["error"]
        time.sleep(60)


product_availability()
