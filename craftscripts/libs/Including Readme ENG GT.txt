Installation of any library minecraft version higher than 1.6.2 is as follows:

1) Copy all the text below the line into your script.
2) In the section "Including library" insert on each connected
library the following code:

source = include("lib1.js");
eval(source);

Here lib1.js is the name of the plugin library. In the code below
for example, two libraries lib1.js and lib2.js. are connected
Do not forget to remove them from the connection!




------------------------------------------

/************************/
/* Including functions  */
/************************/

importClass(Packages.com.sk89q.worldedit.WorldEdit);
importClass(Packages.com.google.common.io.CharStreams);
importPackage(Packages.java.nio.file);

function include(file)
{
	const worldEdit = WorldEdit.getInstance();
	const path = worldEdit.getWorkingDirectoryFile(worldEdit.getConfiguration().scriptsDir).toPath().resolve(file);
	const source = CharStreams.toString(Files.newBufferedReader(path)) + "";
	return source;
}

/***************/
/*End functions*/
/***************/

/************************/
/*  Including library   */
/************************/

source = include("lib1.js");
eval(source);

source = include("lib2.js");
eval(source);

/***************/
/* End process */
/***************/