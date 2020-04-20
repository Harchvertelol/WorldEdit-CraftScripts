Установка любой библиотеки версии майнкрафта выше 1.6.2 происходит следующим образом:

1) Скопировать в ваш скрипт весь текст ниже черты.
2) В разделе "Including library" вставить на каждую подключаемую
библиотеку следующий код:

source = include("lib1.js");
eval(source);

Здесь lib1.js - название подключаемой библиотеки. В коде ниже
черты для примера подключены две библиотеки lib1.js и lib2.js.
Не забудьте их удалить из подключения!




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