This is a small library for inserting your ad into your script.

How to use:

Created an object for the library.

advfactory = new Advertisting();

Set the file name to store the configuration. If you don’t do this,
then the file will be the default, and then there may be conflicts with others
scripts using this library.

advfactory.setNameInfoFile("UltraCommandBlock.info"); //Default AdvInfoFile.info

Set the name of the folder where the configuration file will be stored.

advfactory.setNameInfoFolder("craftscripts"); //default craftscripts

Set the time in seconds after which the ad will be displayed.
Advertising will be shown when the script is called if time has passed since the show
more ads than this feature has installed.

advfactory.setNumbSecBetweenAdv(60*60*24); //The default is 60*60, that is, one hour. An example is shown here once a day.

Installed an advertisement. Below is an example of installing a multi-line
advertisement.

advfactory.setAdvStr("\
-----------------------\n\
You are using script UltraCommandBlock by Harch, Square Team's member.\n\
Youtube channel: http: //www.youtube.com/squareteamchannel\n\
Site: http: //st.minecraft-moscow.com\n\
-----------------------\n\
");

This function must be placed in the place where it will be called
when calling the script. It is recommended to make a separate function with your code
script, and then call it and this function. Processing is in progress in this function.
ad display step (time is checked, an advertisement is displayed, if necessary,
and the time parameter is updated).

advfactory.advStep();

Optional: if necessary, you can call this function to complete
resetting time statistics.

advfactory.createNewInfo();