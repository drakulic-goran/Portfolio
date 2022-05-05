import React, { useState } from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  contact: {
    width: "100%",
    height: "100%",
    background: "#354051",
  },
  contactContainer: {
    color: "white",
    // background: "#354051",
    // height: "100vh",
    position: "relative",
    padding: "1em 2em 40em 2em",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    // padding: "10px",
  },
  headingMain: {
    color: "white",
    textAlign: "center",
    // textTransform: "uppercase",
    marginBottom: "1rem",
  },
  heading: {
    color: "white",
    textAlign: "left",
    // textTransform: "uppercase",
    marginVertical: "20px",
  },
  textField: {
    width: "100%",
    color: "white",
    textAlign: "justify",
    marginBottom: "10px",
  },
}));


const Terms = () => {

  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" className={classes.form}>
            <Typography variant="h5" className={classes.headingMain}>
              TERMS & CONDITIONS
            </Typography>
            <Typography variant="h3" className={classes.textField}>
              This Terms&Conditions are effective as of 2022-03-29
            </Typography>
            <Typography variant="h5" className={classes.heading}>
              General Terms
            </Typography>
            <Typography className={classes.textField}>
              By accessing and placing an order with Goran Drakulić Portfolio site, you confirm that you are in agreement with and bound by the terms of service contained in the Terms&Conditions outlined below – you should make sure therefore that you read them carefully before using the site. These terms apply to the entire site and any email or other type of communication between you and Goran Drakulić Portfolio team./n
              Under no circumstances shall team be liable for any direct, indirect, special, incidental or consequential damages, including, but not limited to, loss of data or profit, arising out of the use, or the inability to use, the materials on this site, even if team or an authorized representative has been advised of the possibility of such damages. If your use of materials from this site results in the need for servicing, repair or correction of equipment or data, you assume any costs thereof./n
              Goran Drakulić Portfolio team will not be responsible for any outcome that may occur during the course of usage of our resources. We reserve the rights to change prices and revise the resources usage policy in any moment./n
              You’re not allowed to copy, or modify the site, any part of the site, or our trademarks in any way. You’re not allowed to attempt to extract the source code of the site, and you also shouldn’t try to translate the site into other languages, or make derivative versions. The site itself, and all the trade marks, copyright, database rights and other intellectual property rights related to it, still belong to Goran Drakulić Portfolio team./n
              Goran Drakulić Portfolio team is committed to ensuring that the site is as useful and efficient as possible. For that reason, we reserve the right to make changes to the site or to charge for its services, at any time and for any reason. We will never charge you for the site or its services without making it very clear to you exactly what you’re paying for./n
              Goran Drakulić Portfolio site stores and processes personal data that you have provided to us, in order to provide Service. It’s your responsibility to keep your phone and access to the site secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone’s security features and it could mean that the Goran Drakulić Portfolio site won’t work properly or at all./n
              Goran Drakulić Portfolio site does use third party services that declare their own Terms and Conditions./n
              Link to Terms and Conditions of third party service providers used by the site:/n
              Google Play Services/n
              AdMob/n
              Google Analytics for Firebase/n
              Firebase Crashlytics/n
              Expo/n
              You should be aware that there are certain things that Goran Drakulić Portfolio team will not take responsibility for. Certain functions of the site will require the site to have an active internet connection. The connection can be Wi-Fi, or provided by your mobile network provider, but Goran Drakulić Portfolio team cannot take responsibility for the site not working at full functionality if you don’t have access to Wi-Fi, and you don’t have any of your data allowance left./n
              If you’re using the site outside of an area with Wi-Fi, you should remember that your terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the site, or other third party charges. In using the site, you’re accepting responsibility for any such charges, including roaming data charges if you use the site outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you’re using the site, please be aware that we assume that you have received permission from the bill payer for using the site./n
              Along the same lines, Goran Drakulić Portfolio team cannot always take responsibility for the way you use the site , i.e. You need to make sure that your device stays charged – if it runs out of battery and you can’t turn it on to avail the Service, Goran Drakulić Portfolio team cannot accept responsibility./n
              With respect to Goran Drakulić Portfolio team’s responsibility for your use of the site, when you’re using the site, it’s important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Goran Drakulić Portfolio team accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the site./n
              At some point, we may wish to update the site. The site is currently available on Android & iOS – the requirements for both systems(and for any additional systems we decide to extend the availability of the site to) may change, and you’ll need to download the updates if you want to keep using the site. Goran Drakulić Portfolio team does not promise that it will always update the site so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the site, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the site, and (if needed) delete it from your device./n
            </Typography>
          </Box>
        </Grid>
      </Box>
    </div >
  );
}

export default Terms;
