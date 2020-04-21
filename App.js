import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial
} from 'expo-ads-admob';


export default function App() {
  React.useEffect(() => {
    async function initAdMobInterstital() {
      await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712');
    }
    initAdMobInterstital()
  }, [])

  async function loadADMobInterstitial() {
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
    await AdMobInterstitial.showAdAsync();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button title="Mostrar propaganda" onPress={loadADMobInterstitial} />
      </View>
      <AdMobBanner
        style={styles.banner}
        bannerSize="banner"
        adUnitID="ca-app-pub-3940256099942544/6300978111"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(err) => console.log(err)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    paddingTop: 40
  },
  content: {
    flex: 1
  }
});
