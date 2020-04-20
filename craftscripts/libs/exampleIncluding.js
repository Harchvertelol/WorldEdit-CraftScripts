/************************/
/* Including functions  */
/************************/

importClass(Packages.com.sk89q.worldedit.WorldEdit);
importClass(Packages.com.google.common.io.CharStreams);
importPackage(Packages.java.nio.file);

function include(file)
{
	try
	{
		const worldEdit = WorldEdit.getInstance();
		const path = worldEdit.getWorkingDirectoryFile(worldEdit.getConfiguration().scriptsDir).toPath().resolve(file);
		const source = CharStreams.toString(Files.newBufferedReader(path)) + "";
		return source;
	}
	catch(nsfe)
	{
		player.print("This script requires a library \"" + file + "\".");
		return "throw new Error(\"Library file not found (" + file + ")\");";
	}
}

/***************/
/*End functions*/
/***************/

/************************/
/*  Including library   */
/************************/

source = include("Advertisting.js");
eval(source);

/***************/
/* End process */
/***************/