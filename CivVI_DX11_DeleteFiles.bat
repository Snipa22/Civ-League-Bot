echo off



REM ************ INSTRUCTIONS *************

REM 1. Verify the SteamExe path matches where your Steam.exe was installed. Change if needed.
REM 2. Verify the GameFolder path matches where your Civ 6 game folder resides. Change if needed.

SET SteamExe="C:\Program Files (x86)\Steam\Steam.exe"

SET GameFolder=%UserProfile%\Documents\My Games\Sid Meier's Civilization VI


REM ************ DO NOT CHANGE ANYTHING BELOW HERE **************

SET SteamGameID=289070

SET GameExe=CivilizationVI.exe




REM Close Civ VI if still running and allow time to completely close


tasklist /fi "imagename eq %GameExe%" |find ":" > nul
if errorlevel 1 taskkill /f /im %GameExe% && TIMEOUT 10



REM Delete folders


del /F /S /Q "%GameFolder%\Cache"
del /F /S /Q "%GameFolder%\dumps"
del /F /S /Q "%GameFolder%\Logs"
del /F /S /Q "%GameFolder%\ModUserData"
del /F /S /Q "%GameFolder%\packagedDumps"



REM Start Civ VI


%SteamExe% steam://rungameid/%SteamGameID%

REM Exit Batch Script


exit