This is a small library for inserting your ad into your script.

Installation: described in the root of the library folder (using the include module).

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

Since the library uses its own set of player commands to obtain information about it,
the developer was given the opportunity to receive information about whether the command was entered
libraries(for example, so as not to display an "unknown parameter" if it was entered).

First option:

if(advfactory.advStep() > 0) mainThread(); //Here we allowed the call of our script when entering the commands "/?", "/ Help" and "help"

The second option:

You write all the code of your script into a function (for example, mainThread()) that returns (for example)
number -1 if your script could not process the entered parameter.
Then the code will be as follows:

q = mainThread();

if(q == -1 && !advfactory.isCommandAdv(argv[1])) player.print("Unknown type.");

advfactory.advStep();

-------------------------------------------------- -------------------------------------------------- ------------

Optional(API):

If necessary, you can call this function to complete
resetting time statistics:

advfactory.createNewInfo();

To restore all library commands to default:

advfactory.setDefaultCommands();

The following command checks if the entered string is a library command.
If yes, then returns true, otherwise returns false.

advfactory.isCommandAdv(cmd);

Show the player information about the library:

advfactory.getAbout();

Show the player information about changes in this version of the library:

advfactory.getChanges();

Display the installed advertisement for the player:

advfactory.getAdvertising();

Show the player information about the presence of teams in the library:

advfactory.getInformationForScriptUsers();

Show the player help on library commands based on script arguments
(returns -1 if nothing was output,
returns 0 if something was output to the commands "/?", "/ help", "help",
returns 1 if something else was printed). This function can be used.
to integrate the library into your script.

advfactory.getHelp();

Library loop processing function. Returns -2 in case of error,
otherwise returns the result of working out the getHelp() function.

advfactory.advStep();

Change the library command to the help call (default /advlibraryhelp):

advfactory.setAdvLibraryHelpCommand(cmd);

Change the library command to the "about library" call (default /advlibraryabout):

advfactory.setAdvLibraryAboutCommand(cmd)

Change the library command to call the list of changes in this version of the library (default /advlibrarychanges):

advfactory.AdvLibraryChangesCommand(cmd);

Setting the file name to store the configuration. If you don’t do this,
then the file will be the default, and then there may be conflicts with others
scripts using this library. By default, AdvInfoFile.info.

advfactory.setNameInfoFile("UltraCommandBlock.info");

Setting the name of the folder where the configuration file will be stored. By default, craftscripts.

advfactory.setNameInfoFolder("craftscripts");

Setting the time in seconds after which an ad will be displayed.
Advertising will be shown when the script is called if time has passed since the show
more ads than this feature has installed. The default is 60*60, that is, once per hour.

advfactory.setNumbSecBetweenAdv(numbofsec);

Set ad text.

advfactory.setAdvStr(text);