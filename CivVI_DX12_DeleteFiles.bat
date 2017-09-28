echo off

REM ************* HOW TO MAKE CIV 6 RUN IN DX12 MODE ****************

REM 1. Open Steam
REM 2. Go to Library
REM 3. Right-click on Civilization and Click "Properties"
REM 4. Click "Launch Options"
REM 5. Type in the following with quotes: "<SteamLibrary>\steamapps\common\Sid Meier's Civilization VI\Base\Binaries\Win64Steam\CivilizationVI_DX12.exe" %command%

REM Note: Replace <SteamLibrary> with where your steam library is. For example: C:\Program Files (x86)\Steam 
REM Note: Be sure to keep the double quotes around the path.




REM ************ INSTRUCTIONS *************

REM 1. Verify the SteamExe path matches where your Steam.exe was installed. Change if needed.
REM 2. Verify the GameFolder path matches where your Civ 6 game folder resides. Change if needed.

SET SteamExe="C:\Program Files (x86)\Steam\Steam.exe"

SET GameFolder=%UserProfile%\Documents\My Games\Sid Meier's Civilization VI



REM ************ DO NOT CHANGE ANYTHING BELOW HERE **************

SET SteamGameID=289070

SET GameExe=CivilizationVI_DX12.exe





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