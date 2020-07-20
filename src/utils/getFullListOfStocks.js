export const getFullListOfStocks = async () => {
  //   const url = new URL("https://api.worldtradingdata.com/api/v1/ticker_list");
  //   let params = {
  //     type: "stocks",
  //     api_token: `${process.env.REACT_APP_WORLD_TRADING_DATA_API}`,
  //     symbol_only: "false",
  //     stock_exchange: "ASX"
  //   };
  //   Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  //   let response;
  //   try {
  //     response = await fetch(url, { method: "GET" });
  //     response = await response.json();
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  let response = [
    {
      symbol: "14D.AX",
      name: "1414 Degrees Ltd"
    },
    {
      symbol: "1AD.AX",
      name: "Adalta Ltd"
    },
    {
      symbol: "1AG.AX",
      name: "Alterra Ltd"
    },
    {
      symbol: "1AL.AX",
      name: "Oneall International Ltd"
    },
    {
      symbol: "1PG.AX",
      name: "N/A"
    },
    {
      symbol: "1ST.AX",
      name: "1st Group Ltd"
    },
    {
      symbol: "2BE.AX",
      name: "Tubi Ltd"
    },
    {
      symbol: "360.AX",
      name: "Life360 Inc"
    },
    {
      symbol: "3DA.AX",
      name: "Amaero International Ltd"
    },
    {
      symbol: "3DP.AX",
      name: "Pointerra Ltd"
    },
    {
      symbol: "3PL.AX",
      name: "3P Learning Ltd"
    },
    {
      symbol: "4CE.AX",
      name: "Force Commodities Ltd"
    },
    {
      symbol: "4DS.AX",
      name: "4DS Memory Ltd"
    },
    {
      symbol: "4WD.AX",
      name: "N/A"
    },
    {
      symbol: "5GN.AX",
      name: "5G Networks Ltd"
    },
    {
      symbol: "88E.AX",
      name: "88 Energy Ltd"
    },
    {
      symbol: "8CO.AX",
      name: "8Common Ltd"
    },
    {
      symbol: "8EC.AX",
      name: "8IP Emerging Companies Ltd"
    },
    {
      symbol: "8IH.AX",
      name: "8I Holdings Ltd"
    },
    {
      symbol: "8VI.AX",
      name: "8VIC Holdings Ltd"
    },
    {
      symbol: "9SP.AX",
      name: "9 Spokes International Ltd"
    },
    {
      symbol: "A1C.AX",
      name: "N/A"
    },
    {
      symbol: "A1G.AX",
      name: "African Gold Ltd"
    },
    {
      symbol: "A1M.AX",
      name: "AIC Mines Ltd (Australia)"
    },
    {
      symbol: "A2B.AX",
      name: "A2B Australia Ltd"
    },
    {
      symbol: "A2M.AX",
      name: "A2 Milk Company Ltd"
    },
    {
      symbol: "A3D.AX",
      name: "Aurora Labs Ltd"
    },
    {
      symbol: "A4N.AX",
      name: "Alpha HPA Ltd"
    },
    {
      symbol: "AAA.AX",
      name: "BETACASH/ETF"
    },
    {
      symbol: "AAC.AX",
      name: "Australian Agricultural Company Ltd"
    },
    {
      symbol: "AAD.AX",
      name: "N/A"
    },
    {
      symbol: "AAI.AX",
      name: "N/A"
    },
    {
      symbol: "AAJ.AX",
      name: "Aruma Resources Ltd"
    },
    {
      symbol: "AAK.AX",
      name: "N/A"
    },
    {
      symbol: "AAL.AX",
      name: "N/A"
    },
    {
      symbol: "AAM.AX",
      name: "N/A"
    },
    {
      symbol: "AAP.AX",
      name: "Australian Agricultural Projects Ltd"
    },
    {
      symbol: "AAR.AX",
      name: "Anglo Australian Resources NL"
    },
    {
      symbol: "AAT.AX",
      name: "N/A"
    },
    {
      symbol: "AAU.AX",
      name: "Adcorp Australia Ltd"
    },
    {
      symbol: "AAX.AX",
      name: "N/A"
    },
    {
      symbol: "AB1.AX",
      name: "N/A"
    },
    {
      symbol: "ABA.AX",
      name: "Auswide Bank Ltd"
    },
    {
      symbol: "ABC.AX",
      name: "Adelaide Brighton Ltd."
    },
    {
      symbol: "ABL.AX",
      name: "Abilene Oil and Gas Ltd"
    },
    {
      symbol: "ABP.AX",
      name: "Abacus Property Group"
    },
    {
      symbol: "ABR.AX",
      name: "American Pacific Borates Ltd"
    },
    {
      symbol: "ABT.AX",
      name: "Abundant Produce Ltd"
    },
    {
      symbol: "ABU.AX",
      name: "N/A"
    },
    {
      symbol: "ABV.AX",
      name: "Advanced Braking Technology Ltd"
    },
    {
      symbol: "ABW.AX",
      name: "N/A"
    },
    {
      symbol: "ABX.AX",
      name: "Australian Bauxite Ltd"
    },
    {
      symbol: "ABY.AX",
      name: "N/A"
    },
    {
      symbol: "AC8.AX",
      name: "Auscann Group Holdings Ltd"
    },
    {
      symbol: "ACB.AX",
      name: "A-Cap Energy Ltd"
    },
    {
      symbol: "ACF.AX",
      name: "Acrow Formwork and Construction Srvc Ltd"
    },
    {
      symbol: "ACG.AX",
      name: "N/A"
    },
    {
      symbol: "ACK.AX",
      name: "N/A"
    },
    {
      symbol: "ACL.AX",
      name: "N/A"
    },
    {
      symbol: "ACO.AX",
      name: "N/A"
    },
    {
      symbol: "ACP.AX",
      name: "Audalia Resources Ltd"
    },
    {
      symbol: "ACQ.AX",
      name: "Acorn Capital Investment Fund Ltd"
    },
    {
      symbol: "ACR.AX",
      name: "Acrux Limited"
    },
    {
      symbol: "ACS.AX",
      name: "Accent Resources N.L."
    },
    {
      symbol: "ACU.AX",
      name: "Acumentis Group Ltd"
    },
    {
      symbol: "ACW.AX",
      name: "Actinogen Medical Ltd"
    },
    {
      symbol: "ACX.AX",
      name: "N/A"
    },
    {
      symbol: "AD1.AX",
      name: "AD1 Holdings Ltd"
    },
    {
      symbol: "AD8.AX",
      name: "Audinate Group Ltd"
    },
    {
      symbol: "ADA.AX",
      name: "Adacel Technologies Limited"
    },
    {
      symbol: "ADD.AX",
      name: "Adavale Resources Limited"
    },
    {
      symbol: "ADH.AX",
      name: "Adairs Ltd"
    },
    {
      symbol: "ADI.AX",
      name: "APN Industria REIT"
    },
    {
      symbol: "ADJ.AX",
      name: "Adslot Ltd"
    },
    {
      symbol: "ADN.AX",
      name: "Andromeda Metals Ltd"
    },
    {
      symbol: "ADO.AX",
      name: "Anteotech Ltd"
    },
    {
      symbol: "ADQ.AX",
      name: "N/A"
    },
    {
      symbol: "ADR.AX",
      name: "Adherium Ltd"
    },
    {
      symbol: "ADT.AX",
      name: "Adriatic Metals PLC"
    },
    {
      symbol: "ADV.AX",
      name: "Ardiden Ltd"
    },
    {
      symbol: "ADX.AX",
      name: "ADX Energy Limited"
    },
    {
      symbol: "ADY.AX",
      name: "Admiralty Resources NL"
    },
    {
      symbol: "AEB.AX",
      name: "N/A"
    },
    {
      symbol: "AED.AX",
      name: "N/A"
    },
    {
      symbol: "AEE.AX",
      name: "Aura Energy Limited"
    },
    {
      symbol: "AEF.AX",
      name: "Australian Ethical Investment Limited"
    },
    {
      symbol: "AEG.AX",
      name: "Absolute Equity Performance Fund Ltd"
    },
    {
      symbol: "AEI.AX",
      name: "Aeris Environmental Ltd"
    },
    {
      symbol: "AEJ.AX",
      name: "N/A"
    },
    {
      symbol: "AEK.AX",
      name: "N/A"
    },
    {
      symbol: "AER.AX",
      name: "AEERIS/ORD UNRESTR NPV"
    },
    {
      symbol: "AES.AX",
      name: "N/A"
    },
    {
      symbol: "AEV.AX",
      name: "Avenira Ltd"
    },
    {
      symbol: "AFA.AX",
      name: "ASF Group Limited"
    },
    {
      symbol: "AFG.AX",
      name: "Australian Finance Group Ltd"
    },
    {
      symbol: "AFI.AX",
      name: "Australian Foundation Investment Co.Ltd."
    },
    {
      symbol: "AFJ.AX",
      name: "N/A"
    },
    {
      symbol: "AFL.AX",
      name: "AF Legal Group Ltd"
    },
    {
      symbol: "AFP.AX",
      name: "AFT Pharmaceuticals Ltd"
    },
    {
      symbol: "AFR.AX",
      name: "African Energy Resources (Guernsey) Ltd."
    },
    {
      symbol: "AFT.AX",
      name: "N/A"
    },
    {
      symbol: "AGD.AX",
      name: "Austral Gold Limited"
    },
    {
      symbol: "AGE.AX",
      name: "Alligator Energy Ltd"
    },
    {
      symbol: "AGF.AX",
      name: "N/A"
    },
    {
      symbol: "AGG.AX",
      name: "ANGLOGOLD/IDR UNRESTR"
    },
    {
      symbol: "AGH.AX",
      name: "Althea Group Holdings Ltd"
    },
    {
      symbol: "AGI.AX",
      name: "Ainsworth Game Technology Limited"
    },
    {
      symbol: "AGJ.AX",
      name: "Agricultural Land Trust"
    },
    {
      symbol: "AGL.AX",
      name: "AGL Energy Limited"
    },
    {
      symbol: "AGM.AX",
      name: "Australian Governance & Ethical Index Fd"
    },
    {
      symbol: "AGO.AX",
      name: "N/A"
    },
    {
      symbol: "AGR.AX",
      name: "Aguia Resources Limited"
    },
    {
      symbol: "AGS.AX",
      name: "Alliance Resources Limited"
    },
    {
      symbol: "AGY.AX",
      name: "Argosy Minerals Limited"
    },
    {
      symbol: "AHF.AX",
      name: "Australian Dairy Nutritionals Group"
    },
    {
      symbol: "AHG.AX",
      name: "Automotive Holdings Group Ltd"
    },
    {
      symbol: "AHK.AX",
      name: "ARK Mines Ltd"
    },
    {
      symbol: "AHL.AX",
      name: "Ahalife Holdings Ltd"
    },
    {
      symbol: "AHN.AX",
      name: "Athena Resources Limited"
    },
    {
      symbol: "AHQ.AX",
      name: "Allegiance Coal Ltd"
    },
    {
      symbol: "AHR.AX",
      name: "N/A"
    },
    {
      symbol: "AHX.AX",
      name: "Apiam Animal Health Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "AHY.AX",
      name: "Asaleo Care Ltd"
    },
    {
      symbol: "AHZ.AX",
      name: "Admedus Ltd"
    },
    {
      symbol: "AIA.AX",
      name: "Auckland International Airport Limited"
    },
    {
      symbol: "AIB.AX",
      name: "Aurora Global Income Trust"
    },
    {
      symbol: "AIO.AX",
      name: "N/A"
    },
    {
      symbol: "AIQ.AX",
      name: "Alternative Investment Trust"
    },
    {
      symbol: "AIR.AX",
      name: "Astivita Ltd"
    },
    {
      symbol: "AIS.AX",
      name: "Aeris Resources Ltd"
    },
    {
      symbol: "AIV.AX",
      name: "ActivEX Limited"
    },
    {
      symbol: "AIY.AX",
      name: "Authorised  Investment Fund Limited"
    },
    {
      symbol: "AIZ.AX",
      name: "Air New Zealand Limited"
    },
    {
      symbol: "AJA.AX",
      name: "N/A"
    },
    {
      symbol: "AJC.AX",
      name: "Acacia Coal Ltd"
    },
    {
      symbol: "AJD.AX",
      name: "N/A"
    },
    {
      symbol: "AJJ.AX",
      name: "Asian American Medical Group Ltd"
    },
    {
      symbol: "AJL.AX",
      name: "AJ Lucas Group Limited"
    },
    {
      symbol: "AJM.AX",
      name: "Altura Mining Ltd"
    },
    {
      symbol: "AJQ.AX",
      name: "Armour Energy Ltd"
    },
    {
      symbol: "AJX.AX",
      name: "Alexium International Group Ltd"
    },
    {
      symbol: "AJY.AX",
      name: "Asaplus Resources Ltd"
    },
    {
      symbol: "AKF.AX",
      name: "N/A"
    },
    {
      symbol: "AKG.AX",
      name: "Academies Australasia Group Ltd"
    },
    {
      symbol: "AKM.AX",
      name: "Aspire Mining Ltd"
    },
    {
      symbol: "AKN.AX",
      name: "Auking Mining Ltd"
    },
    {
      symbol: "AKP.AX",
      name: "Audio Pixels Holdings Ltd"
    },
    {
      symbol: "AKY.AX",
      name: "N/A"
    },
    {
      symbol: "AL8.AX",
      name: "Alderan Resources Ltd"
    },
    {
      symbol: "ALC.AX",
      name: "Alcidion Group Ltd"
    },
    {
      symbol: "ALF.AX",
      name: "Australian Leaders Fund Limited"
    },
    {
      symbol: "ALG.AX",
      name: "Ardent Leisure Group Ltd"
    },
    {
      symbol: "ALI.AX",
      name: "Argo Global Listed Infrastructure Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "ALK.AX",
      name: "Alkane Resources Limited"
    },
    {
      symbol: "ALL.AX",
      name: "Aristocrat Leisure Limited"
    },
    {
      symbol: "ALQ.AX",
      name: "ALS Ltd"
    },
    {
      symbol: "ALR.AX",
      name: "N/A"
    },
    {
      symbol: "ALT.AX",
      name: "Analytica Limited"
    },
    {
      symbol: "ALU.AX",
      name: "Altium Limited"
    },
    {
      symbol: "ALX.AX",
      name: "Atlas Arteria Group"
    },
    {
      symbol: "ALY.AX",
      name: "Alchemy Resources Limited"
    },
    {
      symbol: "AMA.AX",
      name: "AMA Group Ltd"
    },
    {
      symbol: "AMB.AX",
      name: "Ambition Group Ltd"
    },
    {
      symbol: "AMC.AX",
      name: "AMCOR PLC/IDR UNRESTR"
    },
    {
      symbol: "AMD.AX",
      name: "Arrow Minerals Ltd"
    },
    {
      symbol: "AME.AX",
      name: "Alto Metals Ltd"
    },
    {
      symbol: "AMG.AX",
      name: "Ausmex Mining Group Ltd"
    },
    {
      symbol: "AMH.AX",
      name: "AMCIL Limited"
    },
    {
      symbol: "AMI.AX",
      name: "Aurelia Metals Ltd"
    },
    {
      symbol: "AML.AX",
      name: "Aeon Metals Ltd"
    },
    {
      symbol: "AMN.AX",
      name: "Agrimin Ltd"
    },
    {
      symbol: "AMO.AX",
      name: "Ambertech Limited"
    },
    {
      symbol: "AMP.AX",
      name: "AMP Limited"
    },
    {
      symbol: "AMS.AX",
      name: "Atomos Ltd"
    },
    {
      symbol: "AMT.AX",
      name: "Allegra Orthopaedics Ltd"
    },
    {
      symbol: "AMX.AX",
      name: "Aerometrex Ltd"
    },
    {
      symbol: "ANA.AX",
      name: "Ansila Energy NL"
    },
    {
      symbol: "ANB.AX",
      name: "N/A"
    },
    {
      symbol: "ANG.AX",
      name: "Austin Engineering Ltd."
    },
    {
      symbol: "ANI.AX",
      name: "N/A"
    },
    {
      symbol: "ANL.AX",
      name: "Amani Gold Ltd"
    },
    {
      symbol: "ANN.AX",
      name: "Ansell Limited"
    },
    {
      symbol: "ANO.AX",
      name: "Advance Nanotek Ltd"
    },
    {
      symbol: "ANP.AX",
      name: "Antisense Therapeutics Limited"
    },
    {
      symbol: "ANQ.AX",
      name: "N/A"
    },
    {
      symbol: "ANR.AX",
      name: "Anatara Lifesciences Ltd"
    },
    {
      symbol: "ANS.AX",
      name: "N/A"
    },
    {
      symbol: "ANW.AX",
      name: "Aus Tin Mining Ltd"
    },
    {
      symbol: "ANZ.AX",
      name: "Australia and New Zealand Banking Group"
    },
    {
      symbol: "AO1.AX",
      name: "Assetowl Ltd"
    },
    {
      symbol: "AOA.AX",
      name: "Ausmon Resources Ltd"
    },
    {
      symbol: "AOD.AX",
      name: "N/A"
    },
    {
      symbol: "AOF.AX",
      name: "Australian Unity Office Fund"
    },
    {
      symbol: "AOG.AX",
      name: "N/A"
    },
    {
      symbol: "AOH.AX",
      name: "N/A"
    },
    {
      symbol: "AOK.AX",
      name: "N/A"
    },
    {
      symbol: "AON.AX",
      name: "Apollo Minerals Limited."
    },
    {
      symbol: "AOP.AX",
      name: "Apollo Consolidated Limited"
    },
    {
      symbol: "AOU.AX",
      name: "Auroch Minerals Ltd"
    },
    {
      symbol: "AOW.AX",
      name: "N/A"
    },
    {
      symbol: "APA.AX",
      name: "APA Group"
    },
    {
      symbol: "APC.AX",
      name: "Australian Potash Ltd"
    },
    {
      symbol: "APD.AX",
      name: "APN Property Group Ltd."
    },
    {
      symbol: "APE.AX",
      name: "AP Eagers Ltd"
    },
    {
      symbol: "APG.AX",
      name: "Austpac Resources N. L."
    },
    {
      symbol: "APH.AX",
      name: "Australian Primary Hemp Ltd"
    },
    {
      symbol: "API.AX",
      name: "Australian Pharmaceutical Industries Ltd"
    },
    {
      symbol: "APL.AX",
      name: "Antipodes Global Investment Company Ltd"
    },
    {
      symbol: "APO.AX",
      name: "N/A"
    },
    {
      symbol: "APT.AX",
      name: "Afterpay Ltd"
    },
    {
      symbol: "APV.AX",
      name: "Appsvillage Australia Ltd"
    },
    {
      symbol: "APW.AX",
      name: "Aims Property Securities Fund"
    },
    {
      symbol: "APX.AX",
      name: "Appen Ltd"
    },
    {
      symbol: "APZ.AX",
      name: "Aspen Group Limited"
    },
    {
      symbol: "AQC.AX",
      name: "Australian Pacific Coal Ltd"
    },
    {
      symbol: "AQD.AX",
      name: "Ausquest Ltd"
    },
    {
      symbol: "AQF.AX",
      name: "N/A"
    },
    {
      symbol: "AQG.AX",
      name: "ALACERGOLD/IDR UNRESTR"
    },
    {
      symbol: "AQI.AX",
      name: "Alicanto Minerals Ltd"
    },
    {
      symbol: "AQJ.AX",
      name: "N/A"
    },
    {
      symbol: "AQP.AX",
      name: "N/A"
    },
    {
      symbol: "AQQ.AX",
      name: "N/A"
    },
    {
      symbol: "AQR.AX",
      name: "APN Convenience Retail REIT"
    },
    {
      symbol: "AQS.AX",
      name: "Aquis Entertainment Ltd"
    },
    {
      symbol: "AQX.AX",
      name: "Alice Queen Ltd"
    },
    {
      symbol: "AQZ.AX",
      name: "Alliance Aviation Services Ltd"
    },
    {
      symbol: "AR1.AX",
      name: "N/A"
    },
    {
      symbol: "AR9.AX",
      name: "Archtis Ltd"
    },
    {
      symbol: "ARA.AX",
      name: "Ariadne Australia Limited"
    },
    {
      symbol: "ARB.AX",
      name: "ARB Corporation Limited"
    },
    {
      symbol: "ARC.AX",
      name: "Australian Rural Capital Ltd"
    },
    {
      symbol: "ARD.AX",
      name: "Argent Minerals Limited"
    },
    {
      symbol: "ARE.AX",
      name: "Argonaut Resources NL"
    },
    {
      symbol: "ARF.AX",
      name: "Arena REIT No 1"
    },
    {
      symbol: "ARG.AX",
      name: "Argo Investments Limited"
    },
    {
      symbol: "ARH.AX",
      name: "N/A"
    },
    {
      symbol: "ARI.AX",
      name: "N/A"
    },
    {
      symbol: "ARJ.AX",
      name: "N/A"
    },
    {
      symbol: "ARL.AX",
      name: "Ardea Resources Ltd"
    },
    {
      symbol: "ARM.AX",
      name: "Aurora Minerals Limited"
    },
    {
      symbol: "ARN.AX",
      name: "Aldoro Resources Ltd"
    },
    {
      symbol: "ARO.AX",
      name: "Astro Resources N.L."
    },
    {
      symbol: "ARQ.AX",
      name: "ARQ Group Ltd"
    },
    {
      symbol: "ARS.AX",
      name: "Alt Resources Ltd"
    },
    {
      symbol: "ARU.AX",
      name: "Arafura Resources Limited"
    },
    {
      symbol: "ARV.AX",
      name: "Artemis Resources Ltd"
    },
    {
      symbol: "ARX.AX",
      name: "Arc Exploration Limited"
    },
    {
      symbol: "AS1.AX",
      name: "Angel Seafood Holdings Ltd"
    },
    {
      symbol: "ASB.AX",
      name: "Austal Limited"
    },
    {
      symbol: "ASG.AX",
      name: "Autosports Group Ltd"
    },
    {
      symbol: "ASH.AX",
      name: "Ashley Services Group Ltd"
    },
    {
      symbol: "ASIA.AX",
      name: "BETA ASIA/ETF"
    },
    {
      symbol: "ASL.AX",
      name: "Ausdrill Limited"
    },
    {
      symbol: "ASN.AX",
      name: "Anson Resources Ltd"
    },
    {
      symbol: "ASP.AX",
      name: "Aspermont Limited"
    },
    {
      symbol: "ASQ.AX",
      name: "Australian Silica Quartz Group Ltd"
    },
    {
      symbol: "AST.AX",
      name: "Ausnet Services Ltd"
    },
    {
      symbol: "ASW.AX",
      name: "Advanced Share Registry Limited"
    },
    {
      symbol: "ASX.AX",
      name: "ASX Ltd"
    },
    {
      symbol: "ASY.AX",
      name: "N/A"
    },
    {
      symbol: "ASZ.AX",
      name: "N/A"
    },
    {
      symbol: "ATA.AX",
      name: "N/A"
    },
    {
      symbol: "ATC.AX",
      name: "Altech Chemicals Ltd"
    },
    {
      symbol: "ATE.AX",
      name: "N/A"
    },
    {
      symbol: "ATH.AX",
      name: "Alterity Therapeutics Ltd"
    },
    {
      symbol: "ATI.AX",
      name: "N/A"
    },
    {
      symbol: "ATL.AX",
      name: "Apollo Tourism & Leisure Ltd"
    },
    {
      symbol: "ATM.AX",
      name: "ANEKA TAMB/IDR UNRESTR"
    },
    {
      symbol: "ATP.AX",
      name: "Atlas Pearls Ltd"
    },
    {
      symbol: "ATR.AX",
      name: "Astron Ltd"
    },
    {
      symbol: "ATS.AX",
      name: "Australis Oil & Gas Ltd"
    },
    {
      symbol: "ATT.AX",
      name: "N/A"
    },
    {
      symbol: "ATU.AX",
      name: "Atrum Coal Ltd"
    },
    {
      symbol: "ATX.AX",
      name: "Amplia Therapeutics Ltd"
    },
    {
      symbol: "AU1.AX",
      name: "Agency Group Australia Ltd"
    },
    {
      symbol: "AU8.AX",
      name: "Aumake International Ltd"
    },
    {
      symbol: "AUB.AX",
      name: "AUB Group Ltd"
    },
    {
      symbol: "AUC.AX",
      name: "Ausgold Ltd"
    },
    {
      symbol: "AUF.AX",
      name: "N/A"
    },
    {
      symbol: "AUH.AX",
      name: "Austchina Holdings Ltd"
    },
    {
      symbol: "AUI.AX",
      name: "Australian United Investment Company Ltd"
    },
    {
      symbol: "AUL.AX",
      name: "Austar Gold Ltd"
    },
    {
      symbol: "AUMF.AX",
      name: "IEDGEAUMF/ETF"
    },
    {
      symbol: "AUP.AX",
      name: "Aurora Property Buy-Write Income Trust"
    },
    {
      symbol: "AUQ.AX",
      name: "Alara Resources Limited"
    },
    {
      symbol: "AUR.AX",
      name: "Auris Minerals Ltd"
    },
    {
      symbol: "AUST.AX",
      name: "BETA MR AU/FD"
    },
    {
      symbol: "AUT.AX",
      name: "Auteco Minerals Ltd"
    },
    {
      symbol: "AUZ.AX",
      name: "Australian Mines Limited"
    },
    {
      symbol: "AV1.AX",
      name: "Adveritas Ltd"
    },
    {
      symbol: "AVA.AX",
      name: "Ava Risk Group Ltd"
    },
    {
      symbol: "AVB.AX",
      name: "N/A"
    },
    {
      symbol: "AVC.AX",
      name: "Auctus Alternative Investments Ltd"
    },
    {
      symbol: "AVD.AX",
      name: "N/A"
    },
    {
      symbol: "AVE.AX",
      name: "Avecho Biotechnology Ltd"
    },
    {
      symbol: "AVG.AX",
      name: "Australian Vintage Limited"
    },
    {
      symbol: "AVH.AX",
      name: "Avita Medical Ltd"
    },
    {
      symbol: "AVJ.AX",
      name: "Avjennings Ltd"
    },
    {
      symbol: "AVL.AX",
      name: "Australian Vanadium Ltd"
    },
    {
      symbol: "AVN.AX",
      name: "Aventus Group"
    },
    {
      symbol: "AVQ.AX",
      name: "N/A"
    },
    {
      symbol: "AVW.AX",
      name: "Avira Resources Ltd"
    },
    {
      symbol: "AVZ.AX",
      name: "Avz Minerals Ltd"
    },
    {
      symbol: "AWC.AX",
      name: "Alumina Limited"
    },
    {
      symbol: "AWE.AX",
      name: "N/A"
    },
    {
      symbol: "AWN.AX",
      name: "Arowana International Ltd"
    },
    {
      symbol: "AWV.AX",
      name: "Anova Metals Ltd"
    },
    {
      symbol: "AWY.AX",
      name: "Australian Whisky Holdings Ltd"
    },
    {
      symbol: "AX1.AX",
      name: "Accent Group Ltd"
    },
    {
      symbol: "AX8.AX",
      name: "Accelerate Resources Ltd"
    },
    {
      symbol: "AXE.AX",
      name: "Archer Materials Ltd"
    },
    {
      symbol: "AXI.AX",
      name: "Axiom Properties Ltd"
    },
    {
      symbol: "AXL.AX",
      name: "N/A"
    },
    {
      symbol: "AXP.AX",
      name: "N/A"
    },
    {
      symbol: "AXT.AX",
      name: "Argo Exploration Limited"
    },
    {
      symbol: "AXZ.AX",
      name: "N/A"
    },
    {
      symbol: "AYD.AX",
      name: "N/A"
    },
    {
      symbol: "AYF.AX",
      name: "Australian Enhanced Income Fund"
    },
    {
      symbol: "AYH.AX",
      name: "N/A"
    },
    {
      symbol: "AYI.AX",
      name: "A1 Investments & Resources Ltd"
    },
    {
      symbol: "AYJ.AX",
      name: "N/A"
    },
    {
      symbol: "AYK.AX",
      name: "N/A"
    },
    {
      symbol: "AYM.AX",
      name: "Australia United Mining Ltd"
    },
    {
      symbol: "AYR.AX",
      name: "Alloy Resources Limited"
    },
    {
      symbol: "AYS.AX",
      name: "Amaysim Australia Ltd"
    },
    {
      symbol: "AYZ.AX",
      name: "AMYF FIVE/ORD UNRESTR NPV"
    },
    {
      symbol: "AZC.AX",
      name: "N/A"
    },
    {
      symbol: "AZG.AX",
      name: "N/A"
    },
    {
      symbol: "AZI.AX",
      name: "Alta Zinc Ltd"
    },
    {
      symbol: "AZJ.AX",
      name: "Aurizon Holdings Ltd"
    },
    {
      symbol: "AZM.AX",
      name: "Azumah Resources Limited"
    },
    {
      symbol: "AZQ.AX",
      name: "N/A"
    },
    {
      symbol: "AZS.AX",
      name: "Azure Minerals Limited"
    },
    {
      symbol: "AZV.AX",
      name: "Azure Healthcare Ltd"
    },
    {
      symbol: "AZY.AX",
      name: "Antipa Minerals Ltd"
    },
    {
      symbol: "AZZ.AX",
      name: "N/A"
    },
    {
      symbol: "B2Y.AX",
      name: "BOUNTY MNG/ORD UNRESTR NPV"
    },
    {
      symbol: "BAF.AX",
      name: "Blue Sky Alternatives Access Fund Ltd"
    },
    {
      symbol: "BAH.AX",
      name: "N/A"
    },
    {
      symbol: "BAL.AX",
      name: "BELLAMYS AUSTRALIA ORD"
    },
    {
      symbol: "BAP.AX",
      name: "Bapcor Ltd"
    },
    {
      symbol: "BAR.AX",
      name: "Barra Resources Limited"
    },
    {
      symbol: "BAS.AX",
      name: "Bass Oil Ltd"
    },
    {
      symbol: "BAT.AX",
      name: "Battery Minerals Ltd"
    },
    {
      symbol: "BAU.AX",
      name: "Bauxite Resources Limited."
    },
    {
      symbol: "BBC.AX",
      name: "BNK Banking Corporation Ltd"
    },
    {
      symbol: "BBG.AX",
      name: "N/A"
    },
    {
      symbol: "BBL.AX",
      name: "Brisbane Broncos Limited"
    },
    {
      symbol: "BBN.AX",
      name: "Baby Bunting Group Ltd"
    },
    {
      symbol: "BBOZ.AX",
      name: "BETA SBEAR/FD"
    },
    {
      symbol: "BBR.AX",
      name: "Bora Bora Resources Ltd"
    },
    {
      symbol: "BBX.AX",
      name: "BBX Minerals Ltd"
    },
    {
      symbol: "BC8.AX",
      name: "Black Cat Syndicate Ltd"
    },
    {
      symbol: "BCB.AX",
      name: "Bowen Coking Coal Ltd"
    },
    {
      symbol: "BCC.AX",
      name: "Beam Communications Holdings Ltd"
    },
    {
      symbol: "BCD.AX",
      name: "N/A"
    },
    {
      symbol: "BCG.AX",
      name: "N/A"
    },
    {
      symbol: "BCI.AX",
      name: "BCI Minerals Ltd"
    },
    {
      symbol: "BCK.AX",
      name: "Brockman Mining Ltd"
    },
    {
      symbol: "BCL.AX",
      name: "Bunji Corporation Ltd"
    },
    {
      symbol: "BCN.AX",
      name: "Beacon Minerals Ltd"
    },
    {
      symbol: "BCS.AX",
      name: "N/A"
    },
    {
      symbol: "BCT.AX",
      name: "Bluechiip Ltd"
    },
    {
      symbol: "BD1.AX",
      name: "BARD1 Life Sciences Ltd"
    },
    {
      symbol: "BDA.AX",
      name: "BOD Australia Ltd"
    },
    {
      symbol: "BDC.AX",
      name: "Bardoc Gold Ltd"
    },
    {
      symbol: "BDG.AX",
      name: "BLK DRAGON/IDR UNRESTR"
    },
    {
      symbol: "BDI.AX",
      name: "Blina Minerals NL"
    },
    {
      symbol: "BDR.AX",
      name: "N/A"
    },
    {
      symbol: "BEAR.AX",
      name: "BETA BEAR/ETF"
    },
    {
      symbol: "BEE.AX",
      name: "Broo Ltd"
    },
    {
      symbol: "BEL.AX",
      name: "Bentley Capital Limited"
    },
    {
      symbol: "BEM.AX",
      name: "Blackearth Minerals NL"
    },
    {
      symbol: "BEN.AX",
      name: "Bendigo and Adelaide Bank Ltd"
    },
    {
      symbol: "BET.AX",
      name: "Betmakers Technology Group Ltd"
    },
    {
      symbol: "BEZ.AX",
      name: "N/A"
    },
    {
      symbol: "BFC.AX",
      name: "Beston Global Food Company Ltd"
    },
    {
      symbol: "BFG.AX",
      name: "Bell Financial Group Ltd"
    },
    {
      symbol: "BGA.AX",
      name: "Bega Cheese Ltd"
    },
    {
      symbol: "BGG.AX",
      name: "N/A"
    },
    {
      symbol: "BGH.AX",
      name: "N/A"
    },
    {
      symbol: "BGL.AX",
      name: "Bellevue Gold Ltd"
    },
    {
      symbol: "BGP.AX",
      name: "Briscoe Group Limited"
    },
    {
      symbol: "BGS.AX",
      name: "N/A"
    },
    {
      symbol: "BGT.AX",
      name: "Bio-Gene Technology Ltd"
    },
    {
      symbol: "BHD.AX",
      name: "N/A"
    },
    {
      symbol: "BHL.AX",
      name: "Boyuan Holdings Ltd"
    },
    {
      symbol: "BHP.AX",
      name: "BHP Group Ltd"
    },
    {
      symbol: "BID.AX",
      name: "Bidenergy Ltd"
    },
    {
      symbol: "BIG.AX",
      name: "N/A"
    },
    {
      symbol: "BIN.AX",
      name: "Bingo Industries Ltd"
    },
    {
      symbol: "BIQ.AX",
      name: "BuildingIQ Inc"
    },
    {
      symbol: "BIR.AX",
      name: "BIR Financial Ltd"
    },
    {
      symbol: "BIS.AX",
      name: "Bisalloy Steel Group Limited"
    },
    {
      symbol: "BIT.AX",
      name: "Biotron Limited"
    },
    {
      symbol: "BKI.AX",
      name: "Bki Investment Co Ltd"
    },
    {
      symbol: "BKL.AX",
      name: "Blackmores Limited"
    },
    {
      symbol: "BKM.AX",
      name: "N/A"
    },
    {
      symbol: "BKN.AX",
      name: "N/A"
    },
    {
      symbol: "BKP.AX",
      name: "N/A"
    },
    {
      symbol: "BKT.AX",
      name: "Black Rock Mining Ltd"
    },
    {
      symbol: "BKW.AX",
      name: "Brickworks Limited"
    },
    {
      symbol: "BKY.AX",
      name: "Berkeley Energia Ltd"
    },
    {
      symbol: "BLA.AX",
      name: "N/A"
    },
    {
      symbol: "BLD.AX",
      name: "Boral Limited"
    },
    {
      symbol: "BLG.AX",
      name: "BluGlass Limited"
    },
    {
      symbol: "BLK.AX",
      name: "Blackham Resources Ltd"
    },
    {
      symbol: "BLT.AX",
      name: "Benitec Biopharma Ltd"
    },
    {
      symbol: "BLU.AX",
      name: "Blue Energy Limited"
    },
    {
      symbol: "BLV.AX",
      name: "Blossomvale Holdings Ltd"
    },
    {
      symbol: "BLX.AX",
      name: "Beacon Lighting Group Ltd"
    },
    {
      symbol: "BLY.AX",
      name: "Boart Longyear Ltd."
    },
    {
      symbol: "BLZ.AX",
      name: "Blaze International Limited"
    },
    {
      symbol: "BMG.AX",
      name: "BMG Resources Ltd"
    },
    {
      symbol: "BMH.AX",
      name: "Baumart Holdings Ltd"
    },
    {
      symbol: "BMN.AX",
      name: "Bannerman Resources Limited"
    },
    {
      symbol: "BMP.AX",
      name: "N/A"
    },
    {
      symbol: "BMT.AX",
      name: "N/A"
    },
    {
      symbol: "BMZ.AX",
      name: "N/A"
    },
    {
      symbol: "BND.AX",
      name: "N/A"
    },
    {
      symbol: "BNL.AX",
      name: "Big Star Energy Ltd"
    },
    {
      symbol: "BNO.AX",
      name: "Bionomics Ltd"
    },
    {
      symbol: "BNR.AX",
      name: "Bulletin Resources Ltd"
    },
    {
      symbol: "BNT.AX",
      name: "N/A"
    },
    {
      symbol: "BOA.AX",
      name: "Boadicea Resources Ltd"
    },
    {
      symbol: "BOC.AX",
      name: "Bougainville Copper Limited"
    },
    {
      symbol: "BOE.AX",
      name: "Boss Resources Ltd"
    },
    {
      symbol: "BOK.AX",
      name: "N/A"
    },
    {
      symbol: "BOL.AX",
      name: "Boom Logistics Limited"
    },
    {
      symbol: "BOND.AX",
      name: "SPDR BOND/ETF"
    },
    {
      symbol: "BOP.AX",
      name: "N/A"
    },
    {
      symbol: "BOQ.AX",
      name: "Bank of Queensland Limited"
    },
    {
      symbol: "BOT.AX",
      name: "Botanix Pharmaceuticals Ltd"
    },
    {
      symbol: "BPA.AX",
      name: "N/A"
    },
    {
      symbol: "BPF.AX",
      name: "N/A"
    },
    {
      symbol: "BPG.AX",
      name: "Byte Power Group Ltd."
    },
    {
      symbol: "BPH.AX",
      name: "BPH Energy Ltd"
    },
    {
      symbol: "BPL.AX",
      name: "Broken Hill Prospecting Ltd"
    },
    {
      symbol: "BPP.AX",
      name: "Babylon Pump & Power Ltd"
    },
    {
      symbol: "BPS.AX",
      name: "N/A"
    },
    {
      symbol: "BPT.AX",
      name: "Beach Energy Ltd"
    },
    {
      symbol: "BRB.AX",
      name: "Breaker Resources NL"
    },
    {
      symbol: "BRC.AX",
      name: "N/A"
    },
    {
      symbol: "BRG.AX",
      name: "Breville Group Ltd"
    },
    {
      symbol: "BRI.AX",
      name: "Big River Industries Ltd"
    },
    {
      symbol: "BRK.AX",
      name: "Brookside Energy Ltd"
    },
    {
      symbol: "BRL.AX",
      name: "Bathurst Resources Ltd"
    },
    {
      symbol: "BRN.AX",
      name: "Brainchip Holdings Ltd"
    },
    {
      symbol: "BRO.AX",
      name: "N/A"
    },
    {
      symbol: "BRS.AX",
      name: "N/A"
    },
    {
      symbol: "BRU.AX",
      name: "Buru Energy Limited"
    },
    {
      symbol: "BRV.AX",
      name: "Big River Gold Ltd"
    },
    {
      symbol: "BSA.AX",
      name: "BSA Limited"
    },
    {
      symbol: "BSE.AX",
      name: "Base Resources Limited"
    },
    {
      symbol: "BSL.AX",
      name: "BlueScope Steel Limited"
    },
    {
      symbol: "BSM.AX",
      name: "Bass Metals Limited"
    },
    {
      symbol: "BSN.AX",
      name: "N/A"
    },
    {
      symbol: "BSP.AX",
      name: "N/A"
    },
    {
      symbol: "BSR.AX",
      name: "Bassari Resources Ltd."
    },
    {
      symbol: "BST.AX",
      name: "N/A"
    },
    {
      symbol: "BSX.AX",
      name: "Blackstone Minerals Ltd"
    },
    {
      symbol: "BTC.AX",
      name: "BTC Health Ltd"
    },
    {
      symbol: "BTH.AX",
      name: "Bigtincan Holdings Ltd"
    },
    {
      symbol: "BTI.AX",
      name: "Bailador Technology Investments Ltd"
    },
    {
      symbol: "BTN.AX",
      name: "N/A"
    },
    {
      symbol: "BTT.AX",
      name: "N/A"
    },
    {
      symbol: "BUB.AX",
      name: "Bubs Australia Ltd"
    },
    {
      symbol: "BUD.AX",
      name: "Buddy Technologies Ltd"
    },
    {
      symbol: "BUG.AX",
      name: "Buderim Group Ltd"
    },
    {
      symbol: "BUL.AX",
      name: "N/A"
    },
    {
      symbol: "BUX.AX",
      name: "Buxton Resources Limited"
    },
    {
      symbol: "BUY.AX",
      name: "Bounty Oil & Gas NL"
    },
    {
      symbol: "BVS.AX",
      name: "Bravura Solutions Ltd"
    },
    {
      symbol: "BWF.AX",
      name: "Blackwall Ltd"
    },
    {
      symbol: "BWP.AX",
      name: "BWP Trust"
    },
    {
      symbol: "BWR.AX",
      name: "BlackWall Property Trust"
    },
    {
      symbol: "BWX.AX",
      name: "BWX Ltd"
    },
    {
      symbol: "BXB.AX",
      name: "Brambles Limited"
    },
    {
      symbol: "BXN.AX",
      name: "Bioxyne Ltd"
    },
    {
      symbol: "BYE.AX",
      name: "Byron Energy Ltd"
    },
    {
      symbol: "BYH.AX",
      name: "Bryah Resources Ltd"
    },
    {
      symbol: "BYI.AX",
      name: "Beyond International Ltd"
    },
    {
      symbol: "BYL.AX",
      name: "N/A"
    },
    {
      symbol: "BZL.AX",
      name: "N/A"
    },
    {
      symbol: "C6C.AX",
      name: "COPPERMTN/ORD UNRESTR NPV"
    },
    {
      symbol: "CA8.AX",
      name: "CoAssets Ltd"
    },
    {
      symbol: "CAA.AX",
      name: "Capral Limited"
    },
    {
      symbol: "CAB.AX",
      name: "N/A"
    },
    {
      symbol: "CAD.AX",
      name: "Caeneus Minerals Ltd"
    },
    {
      symbol: "CAE.AX",
      name: "Cannindah Resources Ltd"
    },
    {
      symbol: "CAF.AX",
      name: "Centrepoint Alliance Limited"
    },
    {
      symbol: "CAG.AX",
      name: "Cape Range Limited"
    },
    {
      symbol: "CAI.AX",
      name: "Calidus Resources Ltd"
    },
    {
      symbol: "CAJ.AX",
      name: "Capitol Health Ltd"
    },
    {
      symbol: "CAM.AX",
      name: "Clime Capital Ltd"
    },
    {
      symbol: "CAN.AX",
      name: "Cann Group Ltd"
    },
    {
      symbol: "CAP.AX",
      name: "Carpentaria Resources Ltd"
    },
    {
      symbol: "CAQ.AX",
      name: "CAQ Holdings Ltd"
    },
    {
      symbol: "CAR.AX",
      name: "Carsales.Com Ltd"
    },
    {
      symbol: "CAS.AX",
      name: "N/A"
    },
    {
      symbol: "CAT.AX",
      name: "Catapult Group International Ltd"
    },
    {
      symbol: "CAU.AX",
      name: "Cronos Australia Ltd"
    },
    {
      symbol: "CAV.AX",
      name: "Carnavale Resources Limited"
    },
    {
      symbol: "CAY.AX",
      name: "Canyon Resources Ltd"
    },
    {
      symbol: "CAZ.AX",
      name: "Cazaly Resources Limited"
    },
    {
      symbol: "CBA.AX",
      name: "Commonwealth Bank of Australia"
    },
    {
      symbol: "CBC.AX",
      name: "N/A"
    },
    {
      symbol: "CBL.AX",
      name: "N/A"
    },
    {
      symbol: "CBR.AX",
      name: "Carbon Revolution"
    },
    {
      symbol: "CBS.AX",
      name: "N/A"
    },
    {
      symbol: "CBY.AX",
      name: "Canterbury Resources Ltd"
    },
    {
      symbol: "CCA.AX",
      name: "Change Financial Ltd"
    },
    {
      symbol: "CCE.AX",
      name: "Carnegie Clean Energy Ltd"
    },
    {
      symbol: "CCG.AX",
      name: "CommsChoice Group Ltd"
    },
    {
      symbol: "CCJ.AX",
      name: "County International Ltd"
    },
    {
      symbol: "CCL.AX",
      name: "Coca-Cola Amatil Ltd"
    },
    {
      symbol: "CCP.AX",
      name: "Credit Corp Group Limited"
    },
    {
      symbol: "CCV.AX",
      name: "Cash Converters International Ltd"
    },
    {
      symbol: "CCX.AX",
      name: "City Chic Collective Ltd"
    },
    {
      symbol: "CCZ.AX",
      name: "Castillo Copper Ltd"
    },
    {
      symbol: "CD1.AX",
      name: "US Select Private Opportunities Fund"
    },
    {
      symbol: "CD2.AX",
      name: "Cordish Dixon Equity Fund II Pvt"
    },
    {
      symbol: "CD3.AX",
      name: "CORDIXPEF3/TR UT"
    },
    {
      symbol: "CDA.AX",
      name: "Codan Limited"
    },
    {
      symbol: "CDB.AX",
      name: "N/A"
    },
    {
      symbol: "CDC.AX",
      name: "N/A"
    },
    {
      symbol: "CDD.AX",
      name: "Cardno Limited"
    },
    {
      symbol: "CDG.AX",
      name: "Cleveland Mining Company Ltd"
    },
    {
      symbol: "CDH.AX",
      name: "ChongHerr Investments Ltd"
    },
    {
      symbol: "CDM.AX",
      name: "Cadence Capital Limited"
    },
    {
      symbol: "CDP.AX",
      name: "Carindale Property Trust"
    },
    {
      symbol: "CDT.AX",
      name: "Castle Minerals Limited"
    },
    {
      symbol: "CDU.AX",
      name: "N/A"
    },
    {
      symbol: "CDV.AX",
      name: "Cardinal Resources Ltd"
    },
    {
      symbol: "CDX.AX",
      name: "Cardiex Ltd"
    },
    {
      symbol: "CDY.AX",
      name: "Cellmid Limited"
    },
    {
      symbol: "CE1.AX",
      name: "Calima Energy Ltd"
    },
    {
      symbol: "CEL.AX",
      name: "Challenger Exploration Ltd"
    },
    {
      symbol: "CEN.AX",
      name: "Contact Energy Limited"
    },
    {
      symbol: "CER.AX",
      name: "N/A"
    },
    {
      symbol: "CETF.AX",
      name: "VE CHINA/ETF"
    },
    {
      symbol: "CFE.AX",
      name: "Cape Lambert Resources Limited"
    },
    {
      symbol: "CFO.AX",
      name: "Cfoam Ltd"
    },
    {
      symbol: "CFU.AX",
      name: "N/A"
    },
    {
      symbol: "CG1.AX",
      name: "Carbonxt Group Ltd"
    },
    {
      symbol: "CGA.AX",
      name: "Contango Asset Management Ltd"
    },
    {
      symbol: "CGB.AX",
      name: "Cann Global Ltd"
    },
    {
      symbol: "CGC.AX",
      name: "Costa Group Holdings Ltd"
    },
    {
      symbol: "CGF.AX",
      name: "Challenger Ltd"
    },
    {
      symbol: "CGH.AX",
      name: "N/A"
    },
    {
      symbol: "CGL.AX",
      name: "Citadel Group Ltd"
    },
    {
      symbol: "CGM.AX",
      name: "Cougar Metals NL"
    },
    {
      symbol: "CGN.AX",
      name: "Crater Gold Mining Ltd"
    },
    {
      symbol: "CGO.AX",
      name: "CPT Global Limited"
    },
    {
      symbol: "CGR.AX",
      name: "CML Group Ltd"
    },
    {
      symbol: "CGS.AX",
      name: "CogState Limited"
    },
    {
      symbol: "CGW.AX",
      name: "N/A"
    },
    {
      symbol: "CHC.AX",
      name: "Charter Hall Group"
    },
    {
      symbol: "CHF.AX",
      name: "N/A"
    },
    {
      symbol: "CHK.AX",
      name: "Cohiba Minerals Ltd"
    },
    {
      symbol: "CHN.AX",
      name: "Chalice Gold Mines Limited"
    },
    {
      symbol: "CHP.AX",
      name: "N/A"
    },
    {
      symbol: "CHR.AX",
      name: "N/A"
    },
    {
      symbol: "CHZ.AX",
      name: "Chesser Resources Limited"
    },
    {
      symbol: "CI1.AX",
      name: "Credit Intelligence Ltd"
    },
    {
      symbol: "CIA.AX",
      name: "Champion Iron Ltd"
    },
    {
      symbol: "CIE.AX",
      name: "Contango Income Generator Ltd"
    },
    {
      symbol: "CII.AX",
      name: "CI Resources Limited"
    },
    {
      symbol: "CIM.AX",
      name: "Cimic Group Ltd"
    },
    {
      symbol: "CIN.AX",
      name: "Carlton Investments Limited Fully Paid Ord. Shrs"
    },
    {
      symbol: "CINPA.AX",
      name: "N/A"
    },
    {
      symbol: "CIO.AX",
      name: "Connected IO Ltd"
    },
    {
      symbol: "CIP.AX",
      name: "Centuria Industrial Reit"
    },
    {
      symbol: "CIW.AX",
      name: "Clime Investment Management Limited"
    },
    {
      symbol: "CIZ.AX",
      name: "CORIZON/ORD UNRESTR NPV"
    },
    {
      symbol: "CKA.AX",
      name: "Cokal Ltd"
    },
    {
      symbol: "CKF.AX",
      name: "Collins Foods Ltd"
    },
    {
      symbol: "CKL.AX",
      name: "N/A"
    },
    {
      symbol: "CL1.AX",
      name: "Class Ltd"
    },
    {
      symbol: "CL8.AX",
      name: "Collaborate Corporation Ltd"
    },
    {
      symbol: "CLA.AX",
      name: "Celsius Resources Ltd"
    },
    {
      symbol: "CLB.AX",
      name: "Candy Club Holdings Ltd"
    },
    {
      symbol: "CLF.AX",
      name: "Concentrated Leaders Fund Ltd"
    },
    {
      symbol: "CLH.AX",
      name: "Collection House Limited"
    },
    {
      symbol: "CLI.AX",
      name: "CropLogic Ltd"
    },
    {
      symbol: "CLL.AX",
      name: "N/A"
    },
    {
      symbol: "CLQ.AX",
      name: "Clean TeQ Holdings Limited"
    },
    {
      symbol: "CLT.AX",
      name: "Cellnet Group Limited"
    },
    {
      symbol: "CLV.AX",
      name: "Clover Corporation Limited"
    },
    {
      symbol: "CLW.AX",
      name: "Charter Hall Long WALE REIT"
    },
    {
      symbol: "CLX.AX",
      name: "CTI Logistics Limited"
    },
    {
      symbol: "CLY.AX",
      name: "N/A"
    },
    {
      symbol: "CLZ.AX",
      name: "Classic Minerals Ltd"
    },
    {
      symbol: "CM1.AX",
      name: "N/A"
    },
    {
      symbol: "CM8.AX",
      name: "Crowd Media Holdings Ltd"
    },
    {
      symbol: "CMA.AX",
      name: "CENTMTREIT ORD UNIT [CMA]"
    },
    {
      symbol: "CMC.AX",
      name: "N/A"
    },
    {
      symbol: "CMD.AX",
      name: "Cassius Mining Ltd"
    },
    {
      symbol: "CMI.AX",
      name: "N/A"
    },
    {
      symbol: "CML.AX",
      name: "Chase Mining Corporation Ltd"
    },
    {
      symbol: "CMM.AX",
      name: "Capricorn Metals Ltd"
    },
    {
      symbol: "CMP.AX",
      name: "Compumedics Limited"
    },
    {
      symbol: "CMW.AX",
      name: "Cromwell Group"
    },
    {
      symbol: "CMY.AX",
      name: "N/A"
    },
    {
      symbol: "CNB.AX",
      name: "Carnaby Resources Ltd"
    },
    {
      symbol: "CND.AX",
      name: "N/A"
    },
    {
      symbol: "CNEW.AX",
      name: "VE CH NEW/ETF"
    },
    {
      symbol: "CNI.AX",
      name: "Centuria Capital Group"
    },
    {
      symbol: "CNJ.AX",
      name: "Conico Ltd"
    },
    {
      symbol: "CNL.AX",
      name: "Celamin Holdings Ltd"
    },
    {
      symbol: "CNLCA.AX",
      name: "N/A"
    },
    {
      symbol: "CNU.AX",
      name: "Chorus Ltd"
    },
    {
      symbol: "CNW.AX",
      name: "Cirrus Networks Holdings Ltd"
    },
    {
      symbol: "CNX.AX",
      name: "N/A"
    },
    {
      symbol: "COB.AX",
      name: "Cobalt Blue Holdings Ltd"
    },
    {
      symbol: "COE.AX",
      name: "Cooper Energy Ltd."
    },
    {
      symbol: "COF.AX",
      name: "Centuria Office REIT"
    },
    {
      symbol: "COG.AX",
      name: "Consolidated Operations Group Ltd"
    },
    {
      symbol: "COH.AX",
      name: "Cochlear Limited"
    },
    {
      symbol: "COI.AX",
      name: "Comet Ridge Ltd."
    },
    {
      symbol: "COJ.AX",
      name: "N/A"
    },
    {
      symbol: "COL.AX",
      name: "Coles Group Ltd"
    },
    {
      symbol: "COM.AX",
      name: "N/A"
    },
    {
      symbol: "COO.AX",
      name: "Corum Group Limited"
    },
    {
      symbol: "COS.AX",
      name: "Cosol Ltd"
    },
    {
      symbol: "COY.AX",
      name: "Coppermoly Limited"
    },
    {
      symbol: "CP1.AX",
      name: "Cannpal Animal Therapeutics Ltd"
    },
    {
      symbol: "CPH.AX",
      name: "Creso Pharma Ltd"
    },
    {
      symbol: "CPS.AX",
      name: "N/A"
    },
    {
      symbol: "CPT.AX",
      name: "Cipherpoint Ltd"
    },
    {
      symbol: "CPU.AX",
      name: "Computershare Limited"
    },
    {
      symbol: "CPV.AX",
      name: "ClearVue Technologies Ltd"
    },
    {
      symbol: "CQC.AX",
      name: "N/A"
    },
    {
      symbol: "CQE.AX",
      name: "Charter Hall Social Infrastructure REIT"
    },
    {
      symbol: "CQG.AX",
      name: "N/A"
    },
    {
      symbol: "CQR.AX",
      name: "Charter Hall Retail REIT"
    },
    {
      symbol: "CR1.AX",
      name: "Constellation Resources Ltd"
    },
    {
      symbol: "CRB.AX",
      name: "N/A"
    },
    {
      symbol: "CRD.AX",
      name: "Credible Labs Inc CDI"
    },
    {
      symbol: "CRL.AX",
      name: "Comet Resources Limited"
    },
    {
      symbol: "CRM.AX",
      name: "Carbon Minerals Limited"
    },
    {
      symbol: "CRN.AX",
      name: "Coronado Global Resources Inc"
    },
    {
      symbol: "CRO.AX",
      name: "Cirralto Ltd"
    },
    {
      symbol: "CRR.AX",
      name: "N/A"
    },
    {
      symbol: "CRS.AX",
      name: "Caprice Resources Ltd"
    },
    {
      symbol: "CSD.AX",
      name: "Consolidated Tin Mines Limited"
    },
    {
      symbol: "CSE.AX",
      name: "Copper Strike Limited"
    },
    {
      symbol: "CSK.AX",
      name: "Crowdspark Ltd"
    },
    {
      symbol: "CSL.AX",
      name: "CSL Limited"
    },
    {
      symbol: "CSR.AX",
      name: "CSR Limited"
    },
    {
      symbol: "CSS.AX",
      name: "Clean Seas Seafood Ltd"
    },
    {
      symbol: "CSV.AX",
      name: "CSG Limited"
    },
    {
      symbol: "CT1.AX",
      name: "CCP Technologies Ltd"
    },
    {
      symbol: "CTD.AX",
      name: "Corporate Travel Management Ltd"
    },
    {
      symbol: "CTE.AX",
      name: "Cryosite Limited"
    },
    {
      symbol: "CTL.AX",
      name: "N/A"
    },
    {
      symbol: "CTM.AX",
      name: "Centaurus Metals Limited"
    },
    {
      symbol: "CTO.AX",
      name: "Citigold Corporation Limited"
    },
    {
      symbol: "CTP.AX",
      name: "Central Petroleum Limited"
    },
    {
      symbol: "CTX.AX",
      name: "Caltex Australia Limited"
    },
    {
      symbol: "CUE.AX",
      name: "Cue Energy Resources Limited"
    },
    {
      symbol: "CUL.AX",
      name: "Cullen Resources Limited"
    },
    {
      symbol: "CUP.AX",
      name: "Countplus Ltd"
    },
    {
      symbol: "CUV.AX",
      name: "Clinuvel Pharmaceuticals Limited"
    },
    {
      symbol: "CUX.AX",
      name: "Crossland Strategic Metals Ltd"
    },
    {
      symbol: "CV1.AX",
      name: "CV Check Ltd"
    },
    {
      symbol: "CVC.AX",
      name: "CVC Limited"
    },
    {
      symbol: "CVF.AX",
      name: "Contrarian Value Fund Ltd"
    },
    {
      symbol: "CVL.AX",
      name: "CIVMEC/IDR UNRESTR"
    },
    {
      symbol: "CVN.AX",
      name: "Carnarvon Petroleum Limited"
    },
    {
      symbol: "CVO.AX",
      name: "N/A"
    },
    {
      symbol: "CVR.AX",
      name: "N/A"
    },
    {
      symbol: "CVS.AX",
      name: "N/A"
    },
    {
      symbol: "CVT.AX",
      name: "Covata Ltd"
    },
    {
      symbol: "CVV.AX",
      name: "Caravel Minerals Ltd"
    },
    {
      symbol: "CVW.AX",
      name: "Clearview Wealth Ltd"
    },
    {
      symbol: "CWC.AX",
      name: "N/A"
    },
    {
      symbol: "CWH.AX",
      name: "N/A"
    },
    {
      symbol: "CWL.AX",
      name: "Chant West Holdings Ltd"
    },
    {
      symbol: "CWN.AX",
      name: "Crown Resorts Ltd"
    },
    {
      symbol: "CWP.AX",
      name: "Cedar Woods Properties Limited"
    },
    {
      symbol: "CWX.AX",
      name: "Carawine Resources Ltd"
    },
    {
      symbol: "CWY.AX",
      name: "Cleanaway Waste Management Ltd"
    },
    {
      symbol: "CWZ.AX",
      name: "Cashwerkz Ltd"
    },
    {
      symbol: "CXL.AX",
      name: "Calix Ltd"
    },
    {
      symbol: "CXM.AX",
      name: "Centrex Metals Limited"
    },
    {
      symbol: "CXO.AX",
      name: "Core Lithium Ltd"
    },
    {
      symbol: "CXU.AX",
      name: "Cauldron Energy Ltd"
    },
    {
      symbol: "CXX.AX",
      name: "Cradle Resources Ltd"
    },
    {
      symbol: "CXZ.AX",
      name: "Connexion Telematics Ltd"
    },
    {
      symbol: "CY5.AX",
      name: "Cygnus Gold Ltd"
    },
    {
      symbol: "CYA.AX",
      name: "N/A"
    },
    {
      symbol: "CYB.AX",
      name: "CYBG PLC/IDR UNRESTR"
    },
    {
      symbol: "CYC.AX",
      name: "Cyclopharm Limited"
    },
    {
      symbol: "CYG.AX",
      name: "Coventry Group Ltd."
    },
    {
      symbol: "CYL.AX",
      name: "Catalyst Metals Ltd"
    },
    {
      symbol: "CYM.AX",
      name: "Cyprium Metals Ltd"
    },
    {
      symbol: "CYP.AX",
      name: "Cynata Therapeutics Ltd"
    },
    {
      symbol: "CYQ.AX",
      name: "Cycliq Group Ltd"
    },
    {
      symbol: "CYY.AX",
      name: "N/A"
    },
    {
      symbol: "CZI.AX",
      name: "Cassini Resources Ltd"
    },
    {
      symbol: "CZL.AX",
      name: "Consolidated Zinc Ltd"
    },
    {
      symbol: "CZN.AX",
      name: "Corazon Mining Ltd"
    },
    {
      symbol: "CZR.AX",
      name: "Coziron Resources Limited"
    },
    {
      symbol: "CZZ.AX",
      name: "N/A"
    },
    {
      symbol: "D13.AX",
      name: "N/A"
    },
    {
      symbol: "D2O.AX",
      name: "Duxton Water Ltd"
    },
    {
      symbol: "DAF.AX",
      name: "Discovery Africa Ltd"
    },
    {
      symbol: "DAU.AX",
      name: "Dampier Gold Ltd"
    },
    {
      symbol: "DAV.AX",
      name: "Davenport Resources Ltd"
    },
    {
      symbol: "DBF.AX",
      name: "Duxton Broadacre Farms Ltd"
    },
    {
      symbol: "DCC.AX",
      name: "Digitalx Ltd"
    },
    {
      symbol: "DCG.AX",
      name: "Decmil Group Limited"
    },
    {
      symbol: "DCL.AX",
      name: "Domacom Australia Ltd"
    },
    {
      symbol: "DCN.AX",
      name: "Dacian Gold Ltd"
    },
    {
      symbol: "DDD.AX",
      name: "3D Resources Limited"
    },
    {
      symbol: "DDR.AX",
      name: "Dicker Data Ltd"
    },
    {
      symbol: "DDT.AX",
      name: "DataDot Technology Ltd."
    },
    {
      symbol: "DEG.AX",
      name: "De Grey Mining Limited"
    },
    {
      symbol: "DEM.AX",
      name: "DE Mem Ltd"
    },
    {
      symbol: "DEV.AX",
      name: "Devex Resources Ltd"
    },
    {
      symbol: "DFM.AX",
      name: "Dongfang Modern Agriculture Hldg Gp Ltd"
    },
    {
      symbol: "DGH.AX",
      name: "Desane Group Holdings Limited"
    },
    {
      symbol: "DGO.AX",
      name: "DGO Gold Ltd"
    },
    {
      symbol: "DGR.AX",
      name: "DGR Global Ltd"
    },
    {
      symbol: "DGX.AX",
      name: "N/A"
    },
    {
      symbol: "DHG.AX",
      name: "Domain Holdings Australia Ltd"
    },
    {
      symbol: "DHR.AX",
      name: "Dark Horse Resources Ltd"
    },
    {
      symbol: "DIG.AX",
      name: "N/A"
    },
    {
      symbol: "DIV.AX",
      name: "UBS AUSDIV/ETF"
    },
    {
      symbol: "DJRE.AX",
      name: "SPDR DJRE/ETF"
    },
    {
      symbol: "DJW.AX",
      name: "Djerriwarrh Investments Limited"
    },
    {
      symbol: "DKM.AX",
      name: "Duketon Mining Ltd"
    },
    {
      symbol: "DLC.AX",
      name: "Delecta Ltd"
    },
    {
      symbol: "DLS.AX",
      name: "N/A"
    },
    {
      symbol: "DLX.AX",
      name: "DuluxGroup Limited"
    },
    {
      symbol: "DM1.AX",
      name: "N/A"
    },
    {
      symbol: "DMA.AX",
      name: "N/A"
    },
    {
      symbol: "DMC.AX",
      name: "N/A"
    },
    {
      symbol: "DME.AX",
      name: "Dome Gold Mines Ltd"
    },
    {
      symbol: "DMG.AX",
      name: "N/A"
    },
    {
      symbol: "DMI.AX",
      name: "N/A"
    },
    {
      symbol: "DMKT.AX",
      name: "AMPCAP DYN/FD"
    },
    {
      symbol: "DML.AX",
      name: "N/A"
    },
    {
      symbol: "DMP.AX",
      name: "Domino's Pizza Enterprises Ltd."
    },
    {
      symbol: "DN8.AX",
      name: "Dreamscape Networks Ltd"
    },
    {
      symbol: "DNA.AX",
      name: "Donaco International Ltd"
    },
    {
      symbol: "DNK.AX",
      name: "Danakali Ltd"
    },
    {
      symbol: "DOR.AX",
      name: "DORIEMUS/IDR UNRESTR"
    },
    {
      symbol: "DOW.AX",
      name: "Downer EDI Limited"
    },
    {
      symbol: "DRA.AX",
      name: "N/A"
    },
    {
      symbol: "DRE.AX",
      name: "Dreadnought Resources Ltd"
    },
    {
      symbol: "DRG.AX",
      name: "N/A"
    },
    {
      symbol: "DRK.AX",
      name: "N/A"
    },
    {
      symbol: "DRM.AX",
      name: "N/A"
    },
    {
      symbol: "DRO.AX",
      name: "DroneShield Ltd"
    },
    {
      symbol: "DRUG.AX",
      name: "BETAHEALTH/ETF"
    },
    {
      symbol: "DRX.AX",
      name: "Diatreme Resources Limited"
    },
    {
      symbol: "DSB.AX",
      name: "N/A"
    },
    {
      symbol: "DSE.AX",
      name: "Dropsuite Ltd"
    },
    {
      symbol: "DSH.AX",
      name: "N/A"
    },
    {
      symbol: "DSX.AX",
      name: "N/A"
    },
    {
      symbol: "DTC.AX",
      name: "Damstra Holdings Ltd"
    },
    {
      symbol: "DTI.AX",
      name: "DTI Group Ltd"
    },
    {
      symbol: "DTL.AX",
      name: "Data#3 Limited"
    },
    {
      symbol: "DTM.AX",
      name: "Dart Mining NL"
    },
    {
      symbol: "DTR.AX",
      name: "Dateline Resources Ltd"
    },
    {
      symbol: "DTS.AX",
      name: "Dragontail Systems Ltd"
    },
    {
      symbol: "DTZ.AX",
      name: "Dotz Nano Ltd"
    },
    {
      symbol: "DUB.AX",
      name: "Dubber Corp Ltd"
    },
    {
      symbol: "DUE.AX",
      name: "N/A"
    },
    {
      symbol: "DUI.AX",
      name: "Diversified United Investment Limited"
    },
    {
      symbol: "DVA.AX",
      name: "N/A"
    },
    {
      symbol: "DVL.AX",
      name: "Dorsavi Ltd"
    },
    {
      symbol: "DVN.AX",
      name: "Devine Limited"
    },
    {
      symbol: "DW8.AX",
      name: "Digital Wine Ventures Ltd"
    },
    {
      symbol: "DWS.AX",
      name: "DWS Ltd"
    },
    {
      symbol: "DXB.AX",
      name: "Dimerix Ltd"
    },
    {
      symbol: "DXF.AX",
      name: "N/A"
    },
    {
      symbol: "DXN.AX",
      name: "Dxn Ltd"
    },
    {
      symbol: "DXS.AX",
      name: "DEXUS Property Group"
    },
    {
      symbol: "DYL.AX",
      name: "Deep Yellow Limited"
    },
    {
      symbol: "E25.AX",
      name: "Element 25 Ltd"
    },
    {
      symbol: "E2E.AX",
      name: "EON NRG Ltd"
    },
    {
      symbol: "E2M.AX",
      name: "E2 Metals Ltd"
    },
    {
      symbol: "E88.AX",
      name: "N/A"
    },
    {
      symbol: "EAF.AX",
      name: "Evans & Partners Asia Fund"
    },
    {
      symbol: "EAI.AX",
      name: "Ellerston Asian Investments Ltd"
    },
    {
      symbol: "EAL.AX",
      name: "N/A"
    },
    {
      symbol: "EAR.AX",
      name: "N/A"
    },
    {
      symbol: "EAS.AX",
      name: "Easton Investments Ltd"
    },
    {
      symbol: "EAX.AX",
      name: "Energy Action Ltd"
    },
    {
      symbol: "EBG.AX",
      name: "Eumundi Group Ltd."
    },
    {
      symbol: "EBO.AX",
      name: "EBOS Group Ltd"
    },
    {
      symbol: "ECF.AX",
      name: "Elanor Commercial Property Fund"
    },
    {
      symbol: "ECG.AX",
      name: "eCargo Holdings Ltd"
    },
    {
      symbol: "ECL.AX",
      name: "Excelsior Capital Ltd"
    },
    {
      symbol: "ECO.AX",
      name: "N/A"
    },
    {
      symbol: "ECP.AX",
      name: "ECP Emerging Growth Ltd"
    },
    {
      symbol: "ECS.AX",
      name: "ECS Botanics Holdings Ltd"
    },
    {
      symbol: "ECT.AX",
      name: "Environmental Clean Technologies Ltd."
    },
    {
      symbol: "ECV.AX",
      name: "N/A"
    },
    {
      symbol: "ECX.AX",
      name: "Eclipx Group Ltd"
    },
    {
      symbol: "ED1.AX",
      name: "Evans Dixon Ltd"
    },
    {
      symbol: "EDC.AX",
      name: "Eildon Capital Ltd"
    },
    {
      symbol: "EDE.AX",
      name: "Eden Innovations Ltd"
    },
    {
      symbol: "EEG.AX",
      name: "Empire Energy Group Ltd"
    },
    {
      symbol: "EER.AX",
      name: "East Energy Resources Limited"
    },
    {
      symbol: "EEU.AX",
      name: "BETA EURO/ETF"
    },
    {
      symbol: "EFE.AX",
      name: "Eastern Iron Limited"
    },
    {
      symbol: "EFF.AX",
      name: "Evans & Partners Australian Flagship Fnd"
    },
    {
      symbol: "EGA.AX",
      name: "Egan Street Resources Ltd"
    },
    {
      symbol: "EGD.AX",
      name: "Evans & Partners Global Disruption Fund"
    },
    {
      symbol: "EGF.AX",
      name: "Evans & Partners Global Flagship Fund"
    },
    {
      symbol: "EGG.AX",
      name: "Enero Group Ltd"
    },
    {
      symbol: "EGH.AX",
      name: "Eureka Group Holdings Ltd"
    },
    {
      symbol: "EGI.AX",
      name: "Ellerston Global Investments Ltd"
    },
    {
      symbol: "EGL.AX",
      name: "The Environmental Group Ltd"
    },
    {
      symbol: "EGN.AX",
      name: "Engenco Ltd"
    },
    {
      symbol: "EGO.AX",
      name: "N/A"
    },
    {
      symbol: "EGR.AX",
      name: "Ecograf Ltd"
    },
    {
      symbol: "EGS.AX",
      name: "N/A"
    },
    {
      symbol: "EGY.AX",
      name: "Energy Technologies Limited"
    },
    {
      symbol: "EHE.AX",
      name: "Estia Health Ltd"
    },
    {
      symbol: "EHH.AX",
      name: "Eagle Health Holdings Ltd"
    },
    {
      symbol: "EHL.AX",
      name: "Emeco Holdings Limited"
    },
    {
      symbol: "EHX.AX",
      name: "EHR Resources Ltd"
    },
    {
      symbol: "ELD.AX",
      name: "Elders Ltd"
    },
    {
      symbol: "ELK.AX",
      name: "N/A"
    },
    {
      symbol: "ELO.AX",
      name: "ELMO Software Ltd"
    },
    {
      symbol: "ELR.AX",
      name: "N/A"
    },
    {
      symbol: "ELS.AX",
      name: "Elsight Ltd"
    },
    {
      symbol: "ELT.AX",
      name: "Elementos Limited"
    },
    {
      symbol: "ELX.AX",
      name: "Ellex Medical Lasers Ltd"
    },
    {
      symbol: "EM1.AX",
      name: "Emerge Gaming Ltd"
    },
    {
      symbol: "EM2.AX",
      name: "Eagle Mountain Mining Ltd"
    },
    {
      symbol: "EMB.AX",
      name: "Embelton Limited"
    },
    {
      symbol: "EME.AX",
      name: "Energy Metals Ltd"
    },
    {
      symbol: "EMF.AX",
      name: "N/A"
    },
    {
      symbol: "EMG.AX",
      name: "N/A"
    },
    {
      symbol: "EMH.AX",
      name: "European Metals Holdings Ltd CHESS"
    },
    {
      symbol: "EML.AX",
      name: "EML Payments Ltd"
    },
    {
      symbol: "EMMG.AX",
      name: "BETALMEMMG/FD"
    },
    {
      symbol: "EMN.AX",
      name: "EUROMNGNSE/IDR UNRESTR"
    },
    {
      symbol: "EMP.AX",
      name: "Emperor Energy Ltd"
    },
    {
      symbol: "EMR.AX",
      name: "Emerald Resources NL"
    },
    {
      symbol: "EMU.AX",
      name: "Emu NL"
    },
    {
      symbol: "EMV.AX",
      name: "EMvision Medical Devices Ltd"
    },
    {
      symbol: "EN1.AX",
      name: "Engage:BDR Ltd"
    },
    {
      symbol: "ENA.AX",
      name: "Ensurance Ltd"
    },
    {
      symbol: "ENB.AX",
      name: "N/A"
    },
    {
      symbol: "ENC.AX",
      name: "N/A"
    },
    {
      symbol: "ENE.AX",
      name: "Enevis Ltd"
    },
    {
      symbol: "ENN.AX",
      name: "Elanor Investors Group"
    },
    {
      symbol: "ENR.AX",
      name: "Encounter Resources Ltd."
    },
    {
      symbol: "ENT.AX",
      name: "Enterprise Metals Limited"
    },
    {
      symbol: "ENX.AX",
      name: "Enegex Ltd"
    },
    {
      symbol: "EOF.AX",
      name: "Ecofibre Ltd"
    },
    {
      symbol: "EOL.AX",
      name: "Energy One Limited"
    },
    {
      symbol: "EOR.AX",
      name: "Eor Group Ltd"
    },
    {
      symbol: "EOS.AX",
      name: "Electro Optic Systems Hldg Ltd"
    },
    {
      symbol: "EPA.AX",
      name: "Ephraim Resources Ltd"
    },
    {
      symbol: "EPD.AX",
      name: "Empired Ltd"
    },
    {
      symbol: "EPM.AX",
      name: "Eclipse Metals Ltd"
    },
    {
      symbol: "EPW.AX",
      name: "ERM Power Ltd"
    },
    {
      symbol: "EPX.AX",
      name: "N/A"
    },
    {
      symbol: "EQE.AX",
      name: "Equus Mining Ltd"
    },
    {
      symbol: "EQT.AX",
      name: "EQT Holdings Ltd"
    },
    {
      symbol: "EQX.AX",
      name: "Equatorial Resources Ltd"
    },
    {
      symbol: "ERA.AX",
      name: "Energy Resources of Australia Limited"
    },
    {
      symbol: "ERF.AX",
      name: "Elanor Retail Property Fund"
    },
    {
      symbol: "ERG.AX",
      name: "Eneco Refresh Ltd"
    },
    {
      symbol: "ERL.AX",
      name: "Empire Resources Limited"
    },
    {
      symbol: "ERM.AX",
      name: "Emmerson Resources Limited"
    },
    {
      symbol: "ERX.AX",
      name: "Exore Resources Ltd"
    },
    {
      symbol: "ESE.AX",
      name: "Esense-Lab Ltd"
    },
    {
      symbol: "ESH.AX",
      name: "Esports Mogul Ltd"
    },
    {
      symbol: "ESI.AX",
      name: "N/A"
    },
    {
      symbol: "ESK.AX",
      name: "Etherstack PLC"
    },
    {
      symbol: "ESM.AX",
      name: "N/A"
    },
    {
      symbol: "ESR.AX",
      name: "Estrella Resources Ltd"
    },
    {
      symbol: "ESV.AX",
      name: "ESERV/ORD UNRESTR NPV"
    },
    {
      symbol: "ETE.AX",
      name: "Entek Energy Limited"
    },
    {
      symbol: "ETF.AX",
      name: "UBS RP AUS/ETF"
    },
    {
      symbol: "EUC.AX",
      name: "European Cobalt Ltd"
    },
    {
      symbol: "EUR.AX",
      name: "European Lithium Ltd"
    },
    {
      symbol: "EVE.AX",
      name: "Eve Investments Ltd"
    },
    {
      symbol: "EVM.AX",
      name: "N/A"
    },
    {
      symbol: "EVN.AX",
      name: "Evolution Mining Ltd"
    },
    {
      symbol: "EVO.AX",
      name: "Evolve Education Group Ltd"
    },
    {
      symbol: "EVR.AX",
      name: "N/A"
    },
    {
      symbol: "EVS.AX",
      name: "Envirosuite Ltd"
    },
    {
      symbol: "EVT.AX",
      name: "Event Hospitality and Entertainment Ltd"
    },
    {
      symbol: "EVZ.AX",
      name: "EVZ Limited"
    },
    {
      symbol: "EWC.AX",
      name: "Energy World Corporation Ltd."
    },
    {
      symbol: "EX1.AX",
      name: "Exopharm Ltd"
    },
    {
      symbol: "EX20.AX",
      name: "BETAEX20/ETF"
    },
    {
      symbol: "EXC.AX",
      name: "N/A"
    },
    {
      symbol: "EXG.AX",
      name: "N/A"
    },
    {
      symbol: "EXL.AX",
      name: "Elixinol Global Ltd"
    },
    {
      symbol: "EXO.AX",
      name: "Ennox Group Ltd"
    },
    {
      symbol: "EXP.AX",
      name: "Experience Co Ltd"
    },
    {
      symbol: "EXR.AX",
      name: "Elixir Energy Ltd"
    },
    {
      symbol: "EXU.AX",
      name: "N/A"
    },
    {
      symbol: "EZL.AX",
      name: "Euroz Limited"
    },
    {
      symbol: "F100.AX",
      name: "BETA F100/ETF"
    },
    {
      symbol: "FAM.AX",
      name: "Family Insights Group Ltd"
    },
    {
      symbol: "FAN.AX",
      name: "N/A"
    },
    {
      symbol: "FAR.AX",
      name: "FAR Ltd"
    },
    {
      symbol: "FAU.AX",
      name: "First Au Ltd"
    },
    {
      symbol: "FBR.AX",
      name: "FBR Ltd"
    },
    {
      symbol: "FBU.AX",
      name: "Fletcher Building Limited"
    },
    {
      symbol: "FCG.AX",
      name: "N/A"
    },
    {
      symbol: "FCL.AX",
      name: "FINEOS Corporation Holdings PLC"
    },
    {
      symbol: "FCR.AX",
      name: "N/A"
    },
    {
      symbol: "FCT.AX",
      name: "Firstwave Cloud Technology Ltd"
    },
    {
      symbol: "FDM.AX",
      name: "N/A"
    },
    {
      symbol: "FDV.AX",
      name: "Frontier Digital Ventures Ltd"
    },
    {
      symbol: "FDX.AX",
      name: "N/A"
    },
    {
      symbol: "FE8.AX",
      name: "Faster Enterprises Ltd"
    },
    {
      symbol: "FEI.AX",
      name: "FE Investments Group Ltd"
    },
    {
      symbol: "FEL.AX",
      name: "Fe Limited"
    },
    {
      symbol: "FET.AX",
      name: "N/A"
    },
    {
      symbol: "FEX.AX",
      name: "Fenix Resources Ltd"
    },
    {
      symbol: "FFC.AX",
      name: "FarmaForce Ltd"
    },
    {
      symbol: "FFG.AX",
      name: "Fatfish Blockchain Ltd"
    },
    {
      symbol: "FFI.AX",
      name: "FFI Holdings Ltd"
    },
    {
      symbol: "FFL.AX",
      name: "Founders First Ltd"
    },
    {
      symbol: "FFR.AX",
      name: "Firefly Resources Ltd"
    },
    {
      symbol: "FFT.AX",
      name: "N/A"
    },
    {
      symbol: "FGF.AX",
      name: "N/A"
    },
    {
      symbol: "FGG.AX",
      name: "Future Generation Global Invstmnt Co Ltd"
    },
    {
      symbol: "FGI.AX",
      name: "N/A"
    },
    {
      symbol: "FGO.AX",
      name: "Flamingo AI Ltd"
    },
    {
      symbol: "FGR.AX",
      name: "First Graphene Ltd"
    },
    {
      symbol: "FGX.AX",
      name: "Future Generation Investment Company Ltd"
    },
    {
      symbol: "FHS.AX",
      name: "Freehill Mining Ltd"
    },
    {
      symbol: "FID.AX",
      name: "Fiducian Group Ltd"
    },
    {
      symbol: "FIG.AX",
      name: "N/A"
    },
    {
      symbol: "FIJ.AX",
      name: "Fiji Kava Ltd"
    },
    {
      symbol: "FIN.AX",
      name: "Fin Resources Ltd"
    },
    {
      symbol: "FLC.AX",
      name: "Fluence Corporation Ltd"
    },
    {
      symbol: "FLK.AX",
      name: "N/A"
    },
    {
      symbol: "FLN.AX",
      name: "Freelancer Ltd"
    },
    {
      symbol: "FLT.AX",
      name: "Flight Centre Travel Group Ltd"
    },
    {
      symbol: "FMG.AX",
      name: "Fortescue Metals Group Limited"
    },
    {
      symbol: "FML.AX",
      name: "Focus Minerals Ltd."
    },
    {
      symbol: "FMS.AX",
      name: "Flinders Mines Limited"
    },
    {
      symbol: "FND.AX",
      name: "N/A"
    },
    {
      symbol: "FNP.AX",
      name: "Freedom Foods Group Ltd"
    },
    {
      symbol: "FNT.AX",
      name: "Frontier Resources Ltd."
    },
    {
      symbol: "FOD.AX",
      name: "Food Revolution Group Ltd"
    },
    {
      symbol: "FOR.AX",
      name: "Forager Australian Shares Fund"
    },
    {
      symbol: "FPC.AX",
      name: "Fat Prophets Global Contrarian Fund Ltd"
    },
    {
      symbol: "FPH.AX",
      name: "Fisher & Paykel Healthcare Corp Ltd"
    },
    {
      symbol: "FPL.AX",
      name: "Fremont Petroleum Corporation Ltd"
    },
    {
      symbol: "FPP.AX",
      name: "Fat Prophets Global Property Fund"
    },
    {
      symbol: "FRC.AX",
      name: "N/A"
    },
    {
      symbol: "FRI.AX",
      name: "Finbar Group Limited"
    },
    {
      symbol: "FRM.AX",
      name: "Farm Pride Foods Ltd."
    },
    {
      symbol: "FRN.AX",
      name: "Fraser Range Metals Goup Ltd"
    },
    {
      symbol: "FRX.AX",
      name: "Flexiroam Ltd"
    },
    {
      symbol: "FSA.AX",
      name: "FSA Group Ltd"
    },
    {
      symbol: "FSF.AX",
      name: "Fonterra Shareholders' Fund"
    },
    {
      symbol: "FSG.AX",
      name: "Field Solutions Holdings Ltd"
    },
    {
      symbol: "FSI.AX",
      name: "Flagship Investments Ltd"
    },
    {
      symbol: "FTC.AX",
      name: "FinTech Chain Ltd"
    },
    {
      symbol: "FTT.AX",
      name: "Factor Therapeutics Ltd"
    },
    {
      symbol: "FTZ.AX",
      name: "Fertoz Ltd"
    },
    {
      symbol: "FUEL.AX",
      name: "BETAENERGY/ETF"
    },
    {
      symbol: "FUN.AX",
      name: "Funtastic Limited"
    },
    {
      symbol: "FWD.AX",
      name: "Fleetwood Corporation Limited"
    },
    {
      symbol: "FXJ.AX",
      name: "N/A"
    },
    {
      symbol: "FXL.AX",
      name: "FlexiGroup Limited"
    },
    {
      symbol: "FYA.AX",
      name: "N/A"
    },
    {
      symbol: "FYI.AX",
      name: "FYI Resources Ltd"
    },
    {
      symbol: "FZO.AX",
      name: "Family Zone Cyber Safety Ltd"
    },
    {
      symbol: "FZR.AX",
      name: "Fitzroy River Corp Ltd"
    },
    {
      symbol: "G1A.AX",
      name: "Galena Mining Ltd"
    },
    {
      symbol: "G88.AX",
      name: "Golden Mile Resources Ltd"
    },
    {
      symbol: "GAL.AX",
      name: "Galileo Mining Ltd"
    },
    {
      symbol: "GAP.AX",
      name: "Gale Pacific Limited"
    },
    {
      symbol: "GAS.AX",
      name: "State Gas Ltd"
    },
    {
      symbol: "GBA.AX",
      name: "N/A"
    },
    {
      symbol: "GBE.AX",
      name: "Globe Metals & Mining Limited"
    },
    {
      symbol: "GBG.AX",
      name: "Gindalbie Metals Ltd."
    },
    {
      symbol: "GBI.AX",
      name: "N/A"
    },
    {
      symbol: "GBM.AX",
      name: "N/A"
    },
    {
      symbol: "GBP.AX",
      name: "Global Petroleum Limited"
    },
    {
      symbol: "GBR.AX",
      name: "Great Boulder Resources Ltd"
    },
    {
      symbol: "GBT.AX",
      name: "GBST Holdings Limited"
    },
    {
      symbol: "GBZ.AX",
      name: "GBM Resources Limited"
    },
    {
      symbol: "GC1.AX",
      name: "Glennon Small Companies Ltd"
    },
    {
      symbol: "GCI.AX",
      name: "Gryphon Capital Income Trust"
    },
    {
      symbol: "GCN.AX",
      name: "GoConnect Limited"
    },
    {
      symbol: "GCR.AX",
      name: "Golden Cross Resources Ltd"
    },
    {
      symbol: "GCS.AX",
      name: "N/A"
    },
    {
      symbol: "GCY.AX",
      name: "N/A"
    },
    {
      symbol: "GDA.AX",
      name: "N/A"
    },
    {
      symbol: "GDF.AX",
      name: "Garda Diversified Property Fund"
    },
    {
      symbol: "GDG.AX",
      name: "Generation Development Group Ltd"
    },
    {
      symbol: "GDI.AX",
      name: "GDI Property Group Ltd"
    },
    {
      symbol: "GDX.AX",
      name: "VE GOLD/ETF"
    },
    {
      symbol: "GEAR.AX",
      name: "BETAGEAR/ETF"
    },
    {
      symbol: "GED.AX",
      name: "Golden Deeps Ltd."
    },
    {
      symbol: "GEG.AX",
      name: "N/A"
    },
    {
      symbol: "GEM.AX",
      name: "G8 Education Ltd"
    },
    {
      symbol: "GES.AX",
      name: "Genesis Resources Ltd."
    },
    {
      symbol: "GEV.AX",
      name: "Global Energy Ventures Ltd"
    },
    {
      symbol: "GFI.AX",
      name: "N/A"
    },
    {
      symbol: "GFL.AX",
      name: "Global Masters Fund Limited"
    },
    {
      symbol: "GFY.AX",
      name: "N/A"
    },
    {
      symbol: "GGE.AX",
      name: "Grand Gulf Energy Limited"
    },
    {
      symbol: "GGG.AX",
      name: "Greenland Minerals and Energy Limited"
    },
    {
      symbol: "GGL.AX",
      name: "N/A"
    },
    {
      symbol: "GGX.AX",
      name: "Gas2Grid Limited"
    },
    {
      symbol: "GHC.AX",
      name: "N/A"
    },
    {
      symbol: "GIB.AX",
      name: "GIBB River Diamonds Ltd"
    },
    {
      symbol: "GID.AX",
      name: "GI Dynamics Inc"
    },
    {
      symbol: "GJT.AX",
      name: "N/A"
    },
    {
      symbol: "GLA.AX",
      name: "Gladiator Resources Limited"
    },
    {
      symbol: "GLB.AX",
      name: "Globe International Limited"
    },
    {
      symbol: "GLE.AX",
      name: "GLG Corp Ltd."
    },
    {
      symbol: "GLH.AX",
      name: "Global Health Limited"
    },
    {
      symbol: "GLIN.AX",
      name: "AMPCAP INF/FD"
    },
    {
      symbol: "GLL.AX",
      name: "Galilee Energy Ltd."
    },
    {
      symbol: "GLN.AX",
      name: "Galan Lithium Ltd"
    },
    {
      symbol: "GLV.AX",
      name: "Global Oil & Gas Ltd"
    },
    {
      symbol: "GMA.AX",
      name: "Genworth Mortgage Insurance Australia"
    },
    {
      symbol: "GMC.AX",
      name: "Gulf Manganese Corporation Ltd"
    },
    {
      symbol: "GMD.AX",
      name: "Genesis Minerals Ltd"
    },
    {
      symbol: "GME.AX",
      name: "GME Resources Limited"
    },
    {
      symbol: "GMF.AX",
      name: "N/A"
    },
    {
      symbol: "GMG.AX",
      name: "Goodman Group"
    },
    {
      symbol: "GML.AX",
      name: "Gateway Mining Ltd"
    },
    {
      symbol: "GMM.AX",
      name: "N/A"
    },
    {
      symbol: "GMN.AX",
      name: "Gold Mountain Ltd"
    },
    {
      symbol: "GMR.AX",
      name: "Golden Rim Resources Ltd."
    },
    {
      symbol: "GMV.AX",
      name: "G Medical Innovations Holdings Ltd"
    },
    {
      symbol: "GMY.AX",
      name: "N/A"
    },
    {
      symbol: "GNC.AX",
      name: "Graincorp Ltd"
    },
    {
      symbol: "GNE.AX",
      name: "Genesis Energy Ltd"
    },
    {
      symbol: "GNG.AX",
      name: "GR Engineering Services Ltd"
    },
    {
      symbol: "GNM.AX",
      name: "Great Northern Minerals Ltd"
    },
    {
      symbol: "GNV.AX",
      name: "N/A"
    },
    {
      symbol: "GNX.AX",
      name: "Genex Power Ltd"
    },
    {
      symbol: "GO2.AX",
      name: "GO2 People Ltd"
    },
    {
      symbol: "GOE.AX",
      name: "N/A"
    },
    {
      symbol: "GOLD.AX",
      name: "ETFS Physical Gold"
    },
    {
      symbol: "GOO.AX",
      name: "N/A"
    },
    {
      symbol: "GOR.AX",
      name: "Gold Road Resources Ltd"
    },
    {
      symbol: "GOW.AX",
      name: "Gowing Bros. Limited"
    },
    {
      symbol: "GOZ.AX",
      name: "Growthpoint Properties Australia Ltd"
    },
    {
      symbol: "GPP.AX",
      name: "N/A"
    },
    {
      symbol: "GPR.AX",
      name: "Geopacific Resources Ltd"
    },
    {
      symbol: "GPS.AX",
      name: "GPS Alliance Holdings Ltd"
    },
    {
      symbol: "GPT.AX",
      name: "GPT Group"
    },
    {
      symbol: "GPX.AX",
      name: "Graphex Mining Ltd"
    },
    {
      symbol: "GRB.AX",
      name: "Gage Roads Brewing Co Limited"
    },
    {
      symbol: "GRF.AX",
      name: "N/A"
    },
    {
      symbol: "GRG.AX",
      name: "N/A"
    },
    {
      symbol: "GRL.AX",
      name: "Godolphin Resources Ltd"
    },
    {
      symbol: "GRR.AX",
      name: "Grange Resources Limited"
    },
    {
      symbol: "GRV.AX",
      name: "Greenvale Energy Ltd"
    },
    {
      symbol: "GRY.AX",
      name: "N/A"
    },
    {
      symbol: "GSC.AX",
      name: "N/A"
    },
    {
      symbol: "GSL.AX",
      name: "N/A"
    },
    {
      symbol: "GSM.AX",
      name: "Golden State Mining Ltd"
    },
    {
      symbol: "GSN.AX",
      name: "Great Southern Mining Ltd"
    },
    {
      symbol: "GSS.AX",
      name: "Genetic Signatures Ltd"
    },
    {
      symbol: "GSW.AX",
      name: "GetSwift Ltd"
    },
    {
      symbol: "GTE.AX",
      name: "Great Western Exploration Limited"
    },
    {
      symbol: "GTG.AX",
      name: "Genetic Technologies Limited"
    },
    {
      symbol: "GTK.AX",
      name: "Gentrack Group Ltd"
    },
    {
      symbol: "GTN.AX",
      name: "Gtn Ltd"
    },
    {
      symbol: "GTR.AX",
      name: "GTI Resources Ltd"
    },
    {
      symbol: "GTY.AX",
      name: "N/A"
    },
    {
      symbol: "GUD.AX",
      name: "GUD Holdings Limited"
    },
    {
      symbol: "GUL.AX",
      name: "Gullewa Limited"
    },
    {
      symbol: "GVF.AX",
      name: "Global Value Fund Ltd"
    },
    {
      symbol: "GWA.AX",
      name: "GWA Group Ltd"
    },
    {
      symbol: "GWR.AX",
      name: "GWR Group Ltd"
    },
    {
      symbol: "GXL.AX",
      name: "N/A"
    },
    {
      symbol: "GXNCA.AX",
      name: "N/A"
    },
    {
      symbol: "GXY.AX",
      name: "Galaxy Resources Limited"
    },
    {
      symbol: "GZL.AX",
      name: "N/A"
    },
    {
      symbol: "HACK.AX",
      name: "BETA CYBER/ETF"
    },
    {
      symbol: "HAO.AX",
      name: "N/A"
    },
    {
      symbol: "HAR.AX",
      name: "Haranga Resources Ltd"
    },
    {
      symbol: "HAS.AX",
      name: "Hastings Technology Metals Ltd"
    },
    {
      symbol: "HAV.AX",
      name: "Havilah Resources Ltd"
    },
    {
      symbol: "HAW.AX",
      name: "Hawthorn Resources Limited"
    },
    {
      symbol: "HCH.AX",
      name: "Hot Chili Ltd"
    },
    {
      symbol: "HCT.AX",
      name: "Holista Colltech Limited"
    },
    {
      symbol: "HDG.AX",
      name: "N/A"
    },
    {
      symbol: "HDX.AX",
      name: "N/A"
    },
    {
      symbol: "HDY.AX",
      name: "N/A"
    },
    {
      symbol: "HE8.AX",
      name: "Helios Energy Ltd"
    },
    {
      symbol: "HEG.AX",
      name: "N/A"
    },
    {
      symbol: "HFR.AX",
      name: "Highfield Resources Ltd"
    },
    {
      symbol: "HGG.AX",
      name: "N/A"
    },
    {
      symbol: "HGH.AX",
      name: "Heartland Group Holdings Ltd"
    },
    {
      symbol: "HGL.AX",
      name: "Hudson Investment Group Limited"
    },
    {
      symbol: "HGO.AX",
      name: "Hillgrove Resources Limited"
    },
    {
      symbol: "HHM.AX",
      name: "Hampton Hill Mining NL"
    },
    {
      symbol: "HHY.AX",
      name: "HHY Fund"
    },
    {
      symbol: "HIG.AX",
      name: "N/A"
    },
    {
      symbol: "HIL.AX",
      name: "Hills Ltd"
    },
    {
      symbol: "HIP.AX",
      name: "Hipo Resources Ltd"
    },
    {
      symbol: "HIT.AX",
      name: "HiTech Group Australia Limited"
    },
    {
      symbol: "HJPN.AX",
      name: "BETA JPN/ETF"
    },
    {
      symbol: "HLA.AX",
      name: "Healthia Ltd"
    },
    {
      symbol: "HLO.AX",
      name: "Helloworld Travel Ltd"
    },
    {
      symbol: "HLS.AX",
      name: "Healius Ltd"
    },
    {
      symbol: "HLX.AX",
      name: "Helix Resources Ltd."
    },
    {
      symbol: "HM1.AX",
      name: "Hearts and Minds Investments Ltd"
    },
    {
      symbol: "HMC.AX",
      name: "Home Consortium Ltd"
    },
    {
      symbol: "HMD.AX",
      name: "Hera Med Ltd"
    },
    {
      symbol: "HMI.AX",
      name: "N/A"
    },
    {
      symbol: "HML.AX",
      name: "N/A"
    },
    {
      symbol: "HMO.AX",
      name: "N/A"
    },
    {
      symbol: "HMX.AX",
      name: "Hammer Metals Ltd"
    },
    {
      symbol: "HNG.AX",
      name: "HGL Ltd"
    },
    {
      symbol: "HNR.AX",
      name: "Hannans Ltd"
    },
    {
      symbol: "HOG.AX",
      name: "N/A"
    },
    {
      symbol: "HOM.AX",
      name: "N/A"
    },
    {
      symbol: "HOR.AX",
      name: "Horseshoe Metals Ltd"
    },
    {
      symbol: "HOT.AX",
      name: "HotCopper Holdings Ltd"
    },
    {
      symbol: "HPI.AX",
      name: "Hotel Property Investments Ltd"
    },
    {
      symbol: "HPR.AX",
      name: "High Peak Royalties Ltd"
    },
    {
      symbol: "HRL.AX",
      name: "HRL Holdings Ltd"
    },
    {
      symbol: "HRN.AX",
      name: "Horizon Gold Ltd"
    },
    {
      symbol: "HRR.AX",
      name: "Heron Resources Ltd"
    },
    {
      symbol: "HRZ.AX",
      name: "Horizon Minerals Ltd"
    },
    {
      symbol: "HSC.AX",
      name: "Homestay Care Ltd"
    },
    {
      symbol: "HSK.AX",
      name: "N/A"
    },
    {
      symbol: "HSN.AX",
      name: "Hansen Technologies Limited"
    },
    {
      symbol: "HSO.AX",
      name: "Healthscope Ltd"
    },
    {
      symbol: "HT1.AX",
      name: "HT&E Ltd"
    },
    {
      symbol: "HT8.AX",
      name: "Harris Technology Group Ltd"
    },
    {
      symbol: "HTA.AX",
      name: "Hutchison Telecommunications (Aus) Ltd"
    },
    {
      symbol: "HUB.AX",
      name: "Hub24 Ltd"
    },
    {
      symbol: "HUO.AX",
      name: "Huon Aquaculture Group Ltd"
    },
    {
      symbol: "HVN.AX",
      name: "Harvey Norman Holdings Limited"
    },
    {
      symbol: "HVST.AX",
      name: "BETADIVHAR/ETF"
    },
    {
      symbol: "HWH.AX",
      name: "Houston We Have Ltd"
    },
    {
      symbol: "HWK.AX",
      name: "Hawkstone Mining Ltd"
    },
    {
      symbol: "HXG.AX",
      name: "Hexagon Energy Materials Ltd"
    },
    {
      symbol: "HYD.AX",
      name: "Hydrix Ltd"
    },
    {
      symbol: "HZN.AX",
      name: "Horizon Oil Ltd"
    },
    {
      symbol: "HZR.AX",
      name: "Hazer Group Ltd"
    },
    {
      symbol: "IAA.AX",
      name: "ISHASIA50/ETF"
    },
    {
      symbol: "IAB.AX",
      name: "N/A"
    },
    {
      symbol: "IAF.AX",
      name: "ISHUBSCOM/ETF"
    },
    {
      symbol: "IAG.AX",
      name: "Insurance Australia Group Ltd"
    },
    {
      symbol: "IAM.AX",
      name: "Intiger Group Ltd"
    },
    {
      symbol: "IAP.AX",
      name: "Investec Australia Property Fund"
    },
    {
      symbol: "IAU.AX",
      name: "Intrepid Mines Limited (Australia)"
    },
    {
      symbol: "IB8.AX",
      name: "N/A"
    },
    {
      symbol: "IBC.AX",
      name: "Ironbark Capital Limited"
    },
    {
      symbol: "IBG.AX",
      name: "Ironbark Zinc Limited"
    },
    {
      symbol: "IBN.AX",
      name: "iBuyNew Group Ltd"
    },
    {
      symbol: "IBX.AX",
      name: "Imagion Biosystems Ltd"
    },
    {
      symbol: "ICE.AX",
      name: "ICETANALIM/ORD UNRESTR NPV"
    },
    {
      symbol: "ICG.AX",
      name: "Inca Minerals Ltd"
    },
    {
      symbol: "ICI.AX",
      name: "iCandy Interactive Ltd"
    },
    {
      symbol: "ICN.AX",
      name: "Icon Energy Limited"
    },
    {
      symbol: "ICQ.AX",
      name: "iCar Asia Ltd"
    },
    {
      symbol: "ICS.AX",
      name: "ICSGlobal Ltd"
    },
    {
      symbol: "ICT.AX",
      name: "iCollege Ltd"
    },
    {
      symbol: "ICU.AX",
      name: "Isentric Ltd"
    },
    {
      symbol: "ICZ.AX",
      name: "N/A"
    },
    {
      symbol: "ID8.AX",
      name: "identitii Ltd"
    },
    {
      symbol: "IDA.AX",
      name: "Indiana Resources Ltd"
    },
    {
      symbol: "IDC.AX",
      name: "N/A"
    },
    {
      symbol: "IDM.AX",
      name: "N/A"
    },
    {
      symbol: "IDO.AX",
      name: "N/A"
    },
    {
      symbol: "IDR.AX",
      name: "N/A"
    },
    {
      symbol: "IDT.AX",
      name: "IDT Australia Limited"
    },
    {
      symbol: "IDX.AX",
      name: "Integral Diagnostics Ltd"
    },
    {
      symbol: "IDZ.AX",
      name: "Indoor Skydive Australia Group Ltd"
    },
    {
      symbol: "IEC.AX",
      name: "Intra Energy Corporation Ltd"
    },
    {
      symbol: "IEL.AX",
      name: "Idp Education Ltd"
    },
    {
      symbol: "IEM.AX",
      name: "ISHEMGMKT/ETF"
    },
    {
      symbol: "IEQ.AX",
      name: "N/A"
    },
    {
      symbol: "IEU.AX",
      name: "ISHEUROPE/ETF"
    },
    {
      symbol: "IFL.AX",
      name: "IOOF Holdings Limited"
    },
    {
      symbol: "IFM.AX",
      name: "Infomedia Limited"
    },
    {
      symbol: "IFN.AX",
      name: "Infigen Energy Ltd"
    },
    {
      symbol: "IFRA.AX",
      name: "VE INFRA/ETF"
    },
    {
      symbol: "IFS.AX",
      name: "N/A"
    },
    {
      symbol: "IFT.AX",
      name: "Infratil Ltd"
    },
    {
      symbol: "IGE.AX",
      name: "Integrated Green Energy Solutions Ltd"
    },
    {
      symbol: "IGL.AX",
      name: "IVE Group Ltd"
    },
    {
      symbol: "IGN.AX",
      name: "Ignite Ltd"
    },
    {
      symbol: "IGO.AX",
      name: "IGO Ltd"
    },
    {
      symbol: "IGS.AX",
      name: "N/A"
    },
    {
      symbol: "IHCB.AX",
      name: "ISGCBAUD/ETF"
    },
    {
      symbol: "IHD.AX",
      name: "ISHDIVOPP/ETF"
    },
    {
      symbol: "IHEB.AX",
      name: "ISEMBAUD/ETF"
    },
    {
      symbol: "IHL.AX",
      name: "Impression Healthcare Ltd"
    },
    {
      symbol: "IHOO.AX",
      name: "ISGL100AU/ETF"
    },
    {
      symbol: "IHR.AX",
      name: "Intellihr Ltd"
    },
    {
      symbol: "IHS.AX",
      name: "N/A"
    },
    {
      symbol: "IHWL.AX",
      name: "ISCORWLDAU/ETF"
    },
    {
      symbol: "IIL.AX",
      name: "N/A"
    },
    {
      symbol: "IIN.AX",
      name: "N/A"
    },
    {
      symbol: "IJP.AX",
      name: "ISHMSJAP/ETF"
    },
    {
      symbol: "IKE.AX",
      name: "Ikegps Group Ltd"
    },
    {
      symbol: "IKO.AX",
      name: "N/A"
    },
    {
      symbol: "IKW.AX",
      name: "Ikwezi Mining Ltd"
    },
    {
      symbol: "ILB.AX",
      name: "ISHGOVINF/ETF"
    },
    {
      symbol: "ILC.AX",
      name: "ISHLGECAP/ETF"
    },
    {
      symbol: "ILU.AX",
      name: "Iluka Resources Limited"
    },
    {
      symbol: "IMA.AX",
      name: "Image Resources NL"
    },
    {
      symbol: "IMC.AX",
      name: "Immuron Limited"
    },
    {
      symbol: "IMD.AX",
      name: "Imdex Limited"
    },
    {
      symbol: "IME.AX",
      name: "ImExHS Ltd"
    },
    {
      symbol: "IMF.AX",
      name: "IMF Bentham Ltd"
    },
    {
      symbol: "IMM.AX",
      name: "Immutep Ltd"
    },
    {
      symbol: "IMR.AX",
      name: "Imricor Medical Systems Inc"
    },
    {
      symbol: "IMS.AX",
      name: "Impelus Ltd"
    },
    {
      symbol: "IMU.AX",
      name: "Imugene Limited"
    },
    {
      symbol: "INA.AX",
      name: "Ingenia Communities Group"
    },
    {
      symbol: "IND.AX",
      name: "Indus Energy NL"
    },
    {
      symbol: "INF.AX",
      name: "Infinity Lithium Corporation Ltd"
    },
    {
      symbol: "ING.AX",
      name: "Inghams Group Ltd"
    },
    {
      symbol: "INK.AX",
      name: "Indago Energy Ltd"
    },
    {
      symbol: "INM.AX",
      name: "N/A"
    },
    {
      symbol: "INP.AX",
      name: "Incentiapay Ltd"
    },
    {
      symbol: "INR.AX",
      name: "Ioneer Ltd"
    },
    {
      symbol: "INV.AX",
      name: "Investsmart Group Ltd"
    },
    {
      symbol: "IOD.AX",
      name: "Iodm Ltd"
    },
    {
      symbol: "IOF.AX",
      name: "N/A"
    },
    {
      symbol: "IOO.AX",
      name: "N/A"
    },
    {
      symbol: "IOT.AX",
      name: "N/A"
    },
    {
      symbol: "IOZ.AX",
      name: "ISHAUS200/ETF"
    },
    {
      symbol: "IP1.AX",
      name: "Integrated Payment Technologies Ltd"
    },
    {
      symbol: "IPA.AX",
      name: "N/A"
    },
    {
      symbol: "IPB.AX",
      name: "IPB Petroleum Ltd"
    },
    {
      symbol: "IPC.AX",
      name: "Imperial Pacific Ltd"
    },
    {
      symbol: "IPD.AX",
      name: "Impedimed Limited"
    },
    {
      symbol: "IPE.AX",
      name: "N/A"
    },
    {
      symbol: "IPH.AX",
      name: "IPH Ltd"
    },
    {
      symbol: "IPL.AX",
      name: "Incitec Pivot Ltd"
    },
    {
      symbol: "IPP.AX",
      name: "N/A"
    },
    {
      symbol: "IPT.AX",
      name: "Impact Minerals Limited"
    },
    {
      symbol: "IQ3.AX",
      name: "iQ3Corp Ltd"
    },
    {
      symbol: "IQE.AX",
      name: "N/A"
    },
    {
      symbol: "IRC.AX",
      name: "N/A"
    },
    {
      symbol: "IRD.AX",
      name: "Iron Road Limited"
    },
    {
      symbol: "IRE.AX",
      name: "Iress Ltd"
    },
    {
      symbol: "IRI.AX",
      name: "Integrated Research Limited"
    },
    {
      symbol: "IRL.AX",
      name: "N/A"
    },
    {
      symbol: "IS3.AX",
      name: "I Synergy Group Ltd"
    },
    {
      symbol: "ISD.AX",
      name: "iSentia Group Ltd"
    },
    {
      symbol: "ISEC.AX",
      name: "IENHNCDCSH/ETF"
    },
    {
      symbol: "ISO.AX",
      name: "ISHSMLORD/ETF"
    },
    {
      symbol: "ISU.AX",
      name: "iSelect Ltd"
    },
    {
      symbol: "ISX.AX",
      name: "iSignthis Ltd"
    },
    {
      symbol: "ITD.AX",
      name: "N/A"
    },
    {
      symbol: "ITG.AX",
      name: "Intega Group Ltd"
    },
    {
      symbol: "ITL.AX",
      name: "N/A"
    },
    {
      symbol: "ITQ.AX",
      name: "N/A"
    },
    {
      symbol: "ITW.AX",
      name: "ISHTAI/ETF"
    },
    {
      symbol: "IVC.AX",
      name: "InvoCare Limited"
    },
    {
      symbol: "IVO.AX",
      name: "Invigor Group Ltd"
    },
    {
      symbol: "IVQ.AX",
      name: "N/A"
    },
    {
      symbol: "IVR.AX",
      name: "Investigator Resources Ltd"
    },
    {
      symbol: "IVT.AX",
      name: "Inventis Limited"
    },
    {
      symbol: "IVV.AX",
      name: "N/A"
    },
    {
      symbol: "IVX.AX",
      name: "Invion Ltd"
    },
    {
      symbol: "IVZ.AX",
      name: "Invictus Energy Ltd"
    },
    {
      symbol: "IXC.AX",
      name: "Invex Therapeutics Ltd"
    },
    {
      symbol: "IXJ.AX",
      name: "N/A"
    },
    {
      symbol: "IXU.AX",
      name: "IXUP Ltd"
    },
    {
      symbol: "IZZ.AX",
      name: "N/A"
    },
    {
      symbol: "JAL.AX",
      name: "Jameson Resources Limited."
    },
    {
      symbol: "JAN.AX",
      name: "Janison Education Group Ltd"
    },
    {
      symbol: "JAT.AX",
      name: "Jatenergy Ltd"
    },
    {
      symbol: "JAY.AX",
      name: "Jayride Group Ltd"
    },
    {
      symbol: "JBH.AX",
      name: "JB Hi-Fi Limited"
    },
    {
      symbol: "JCI.AX",
      name: "N/A"
    },
    {
      symbol: "JCS.AX",
      name: "JCurve Solutions Ltd"
    },
    {
      symbol: "JDR.AX",
      name: "Jadar Resources Ltd"
    },
    {
      symbol: "JHC.AX",
      name: "Japara Healthcare Ltd"
    },
    {
      symbol: "JHG.AX",
      name: "JANUS/IDR UNRESTR"
    },
    {
      symbol: "JHL.AX",
      name: "Jayex Healthcare Ltd"
    },
    {
      symbol: "JHX.AX",
      name: "James Hardie Industries plc"
    },
    {
      symbol: "JIN.AX",
      name: "Jumbo Interactive Ltd"
    },
    {
      symbol: "JIP.AX",
      name: "N/A"
    },
    {
      symbol: "JJF.AX",
      name: "N/A"
    },
    {
      symbol: "JKA.AX",
      name: "N/A"
    },
    {
      symbol: "JKL.AX",
      name: "N/A"
    },
    {
      symbol: "JLG.AX",
      name: "Johns Lyng Group Ltd"
    },
    {
      symbol: "JMS.AX",
      name: "Jupiter Mines Ltd"
    },
    {
      symbol: "JPR.AX",
      name: "Jupiter Energy Limited"
    },
    {
      symbol: "JRL.AX",
      name: "Jindalee Resources Limited"
    },
    {
      symbol: "JRV.AX",
      name: "Jervois Mining Limited"
    },
    {
      symbol: "JVG.AX",
      name: "JV Global Limited"
    },
    {
      symbol: "JXT.AX",
      name: "Jaxsta Ltd"
    },
    {
      symbol: "JYC.AX",
      name: "Joyce Corporation Ltd"
    },
    {
      symbol: "K2F.AX",
      name: "K2FLY Ltd"
    },
    {
      symbol: "KAI.AX",
      name: "Kairos Minerals Ltd"
    },
    {
      symbol: "KAM.AX",
      name: "K2 Asset Management Holdings Ltd"
    },
    {
      symbol: "KAR.AX",
      name: "Karoon Energy Ltd"
    },
    {
      symbol: "KAS.AX",
      name: "Kasbah Resources Ltd."
    },
    {
      symbol: "KAT.AX",
      name: "Katana Capital Limited"
    },
    {
      symbol: "KBC.AX",
      name: "Keybridge Capital Limited"
    },
    {
      symbol: "KBL.AX",
      name: "N/A"
    },
    {
      symbol: "KCN.AX",
      name: "Kingsgate Consolidated Limited"
    },
    {
      symbol: "KDL.AX",
      name: "N/A"
    },
    {
      symbol: "KDR.AX",
      name: "N/A"
    },
    {
      symbol: "KEY.AX",
      name: "Key Petroleum Ltd"
    },
    {
      symbol: "KFE.AX",
      name: "Kogi Iron Ltd"
    },
    {
      symbol: "KFG.AX",
      name: "N/A"
    },
    {
      symbol: "KGD.AX",
      name: "Kula Gold Ltd"
    },
    {
      symbol: "KGL.AX",
      name: "KGL Resources Ltd"
    },
    {
      symbol: "KGM.AX",
      name: "Kalnorth Gold Mines Ltd"
    },
    {
      symbol: "KGN.AX",
      name: "Kogan.com Ltd"
    },
    {
      symbol: "KII.AX",
      name: "K2 GLB EQU/FD"
    },
    {
      symbol: "KIK.AX",
      name: "N/A"
    },
    {
      symbol: "KIN.AX",
      name: "Kin Mining NL"
    },
    {
      symbol: "KIS.AX",
      name: "King Island Scheelite Limited"
    },
    {
      symbol: "KKC.AX",
      name: "Kkr Credit Income Fund"
    },
    {
      symbol: "KKL.AX",
      name: "Kollakorn Corp Ltd"
    },
    {
      symbol: "KKO.AX",
      name: "N/A"
    },
    {
      symbol: "KKT.AX",
      name: "Konekt Limited"
    },
    {
      symbol: "KLA.AX",
      name: "KIRKLAND/IDR UNRESTR"
    },
    {
      symbol: "KLH.AX",
      name: "Kalia Ltd"
    },
    {
      symbol: "KLL.AX",
      name: "Kalium Lakes Ltd"
    },
    {
      symbol: "KLO.AX",
      name: "Kingsland Global Ltd"
    },
    {
      symbol: "KLR.AX",
      name: "Kaili Resources Ltd"
    },
    {
      symbol: "KMD.AX",
      name: "Kathmandu Holdings Ltd"
    },
    {
      symbol: "KME.AX",
      name: "Kip McGrath Education Centres Limited"
    },
    {
      symbol: "KMT.AX",
      name: "Kopore Metals Ltd"
    },
    {
      symbol: "KNH.AX",
      name: "N/A"
    },
    {
      symbol: "KNL.AX",
      name: "Kibaran Resources Ltd"
    },
    {
      symbol: "KNM.AX",
      name: "Kneomedia Ltd"
    },
    {
      symbol: "KNO.AX",
      name: "Knosys Ltd"
    },
    {
      symbol: "KOR.AX",
      name: "Korab Resources Limited"
    },
    {
      symbol: "KOV.AX",
      name: "Korvest Limited"
    },
    {
      symbol: "KP2.AX",
      name: "KORE/IDR UNRESTR"
    },
    {
      symbol: "KPC.AX",
      name: "N/A"
    },
    {
      symbol: "KPE.AX",
      name: "KINA PET LTD/SH SH"
    },
    {
      symbol: "KPG.AX",
      name: "Kelly Partners Group Holdings Ltd"
    },
    {
      symbol: "KPL.AX",
      name: "N/A"
    },
    {
      symbol: "KPO.AX",
      name: "Kalina Power Ltd"
    },
    {
      symbol: "KPR.AX",
      name: "N/A"
    },
    {
      symbol: "KPT.AX",
      name: "Kangaroo Island Plantation Timbers Ltd"
    },
    {
      symbol: "KRC.AX",
      name: "N/A"
    },
    {
      symbol: "KRL.AX",
      name: "N/A"
    },
    {
      symbol: "KRM.AX",
      name: "Kingsrose Mining Limited"
    },
    {
      symbol: "KRR.AX",
      name: "King River Resources Ltd"
    },
    {
      symbol: "KRS.AX",
      name: "N/A"
    },
    {
      symbol: "KRX.AX",
      name: "Koppar Resources Ltd"
    },
    {
      symbol: "KSC.AX",
      name: "K&S Corporation Ltd"
    },
    {
      symbol: "KSL.AX",
      name: "Kina Securities Ltd"
    },
    {
      symbol: "KSN.AX",
      name: "Kingston Resources Ltd"
    },
    {
      symbol: "KSS.AX",
      name: "Kleos Space SA"
    },
    {
      symbol: "KTA.AX",
      name: "Krakatoa Resources Ltd"
    },
    {
      symbol: "KTD.AX",
      name: "Keytone Dairy Corporation Ltd"
    },
    {
      symbol: "KTE.AX",
      name: "K2 Energy Investments Pty Ltd"
    },
    {
      symbol: "KTG.AX",
      name: "K-Tig Ltd"
    },
    {
      symbol: "KWR.AX",
      name: "Kingwest Resources Ltd"
    },
    {
      symbol: "KYK.AX",
      name: "Kyckr Ltd"
    },
    {
      symbol: "KZA.AX",
      name: "Kazia Therapeutics Ltd"
    },
    {
      symbol: "KZR.AX",
      name: "Kalamazoo Resources Ltd"
    },
    {
      symbol: "LAA.AX",
      name: "Latam Autos Ltd"
    },
    {
      symbol: "LAM.AX",
      name: "LARAMIDE/IDR UNRESTR"
    },
    {
      symbol: "LAU.AX",
      name: "Lindsay Australia Limited"
    },
    {
      symbol: "LAW.AX",
      name: "Lawfinance Ltd"
    },
    {
      symbol: "LBL.AX",
      name: "LaserBond Limited"
    },
    {
      symbol: "LBT.AX",
      name: "LBT Innovations Limited"
    },
    {
      symbol: "LCD.AX",
      name: "Latitude Consolidated Ltd"
    },
    {
      symbol: "LCE.AX",
      name: "London City Equities Limited"
    },
    {
      symbol: "LCK.AX",
      name: "Leigh Creek Energy Ltd"
    },
    {
      symbol: "LCM.AX",
      name: "LogiCamms Limited"
    },
    {
      symbol: "LCT.AX",
      name: "Living Cell Technologies Ltd."
    },
    {
      symbol: "LCY.AX",
      name: "Legacy Iron Ore Limited"
    },
    {
      symbol: "LEG.AX",
      name: "Legend Mining Limited"
    },
    {
      symbol: "LEP.AX",
      name: "ALE Property Group"
    },
    {
      symbol: "LER.AX",
      name: "Leaf Resources Ltd"
    },
    {
      symbol: "LEX.AX",
      name: "Lefroy Exploration Ltd"
    },
    {
      symbol: "LFC.AX",
      name: "N/A"
    },
    {
      symbol: "LFR.AX",
      name: "N/A"
    },
    {
      symbol: "LGD.AX",
      name: "N/A"
    },
    {
      symbol: "LGO.AX",
      name: "N/A"
    },
    {
      symbol: "LGR.AX",
      name: "N/A"
    },
    {
      symbol: "LHB.AX",
      name: "Lionhub Group Ltd"
    },
    {
      symbol: "LHC.AX",
      name: "N/A"
    },
    {
      symbol: "LHM.AX",
      name: "Land & Homes Group Ltd"
    },
    {
      symbol: "LI3.AX",
      name: "Lithium Consolidated Mineral Explrtn Ltd"
    },
    {
      symbol: "LIC.AX",
      name: "Lifestyle Communities Limited"
    },
    {
      symbol: "LIN.AX",
      name: "Lindian Resources Ltd."
    },
    {
      symbol: "LIO.AX",
      name: "Lion Energy Ltd."
    },
    {
      symbol: "LIT.AX",
      name: "Lithium Australia NL"
    },
    {
      symbol: "LKE.AX",
      name: "Lake Resources N.L."
    },
    {
      symbol: "LKO.AX",
      name: "Lakes Oil N.L."
    },
    {
      symbol: "LLC.AX",
      name: "Lendlease Group"
    },
    {
      symbol: "LLO.AX",
      name: "LION ONE/IDR UNRESTR"
    },
    {
      symbol: "LMC.AX",
      name: "N/A"
    },
    {
      symbol: "LME.AX",
      name: "Limeade Inc"
    },
    {
      symbol: "LMG.AX",
      name: "Latrobe Magnesium Limited"
    },
    {
      symbol: "LML.AX",
      name: "Lincoln Minerals Ltd"
    },
    {
      symbol: "LMR.AX",
      name: "N/A"
    },
    {
      symbol: "LMW.AX",
      name: "LandMark White Limited"
    },
    {
      symbol: "LNG.AX",
      name: "Liquefied Natural Gas Ltd"
    },
    {
      symbol: "LNK.AX",
      name: "Link Administration Holdings Ltd"
    },
    {
      symbol: "LNR.AX",
      name: "N/A"
    },
    {
      symbol: "LNU.AX",
      name: "Linius Technologies Ltd"
    },
    {
      symbol: "LNY.AX",
      name: "Laneway Resources Ltd"
    },
    {
      symbol: "LOM.AX",
      name: "Lucapa Diamond Co Ltd"
    },
    {
      symbol: "LON.AX",
      name: "Longtable Group Ltd"
    },
    {
      symbol: "LOT.AX",
      name: "Lotus Resources Ltd"
    },
    {
      symbol: "LOV.AX",
      name: "Lovisa Holdings Ltd"
    },
    {
      symbol: "LPD.AX",
      name: "Lepidico Ltd"
    },
    {
      symbol: "LPE.AX",
      name: "Locality Planning Energy Holdings Ltd"
    },
    {
      symbol: "LPI.AX",
      name: "Lithium Power International Ltd"
    },
    {
      symbol: "LRL.AX",
      name: "N/A"
    },
    {
      symbol: "LRM.AX",
      name: "Lustrum Minerals Ltd"
    },
    {
      symbol: "LRS.AX",
      name: "Latin Resources Ltd"
    },
    {
      symbol: "LRT.AX",
      name: "Lowell Resources Fund"
    },
    {
      symbol: "LSA.AX",
      name: "Lachlan Star Ltd"
    },
    {
      symbol: "LSF.AX",
      name: "L1 Long Short Fund Ltd"
    },
    {
      symbol: "LSH.AX",
      name: "Lifespot Health Ltd"
    },
    {
      symbol: "LSR.AX",
      name: "Lodestar Minerals Limited"
    },
    {
      symbol: "LSX.AX",
      name: "Lion Selection Group Ltd"
    },
    {
      symbol: "LTN.AX",
      name: "N/A"
    },
    {
      symbol: "LTR.AX",
      name: "Liontown Resources Limited"
    },
    {
      symbol: "LVE.AX",
      name: "Love Group Global Ltd"
    },
    {
      symbol: "LVH.AX",
      name: "LiveHire Ltd"
    },
    {
      symbol: "LVT.AX",
      name: "Livetiles Ltd"
    },
    {
      symbol: "LWP.AX",
      name: "N/A"
    },
    {
      symbol: "LYC.AX",
      name: "Lynas Corporation Ltd"
    },
    {
      symbol: "LYL.AX",
      name: "Lycopodium Limited"
    },
    {
      symbol: "M7T.AX",
      name: "Mach7 Technologies Ltd"
    },
    {
      symbol: "M8S.AX",
      name: "M8 Sustainable Ltd"
    },
    {
      symbol: "MA1.AX",
      name: "Monash Absolute Investment Company Ltd"
    },
    {
      symbol: "MAD.AX",
      name: "Mader Group Ltd"
    },
    {
      symbol: "MAE.AX",
      name: "N/A"
    },
    {
      symbol: "MAG.AX",
      name: "Magmatic Resources Ltd"
    },
    {
      symbol: "MAH.AX",
      name: "Macmahon Holdings Limited"
    },
    {
      symbol: "MAI.AX",
      name: "Mainstream Group Holdings Ltd"
    },
    {
      symbol: "MAM.AX",
      name: "Microequities Asset Management Group Ltd"
    },
    {
      symbol: "MAN.AX",
      name: "Mandrake Resources Ltd"
    },
    {
      symbol: "MAQ.AX",
      name: "Macquarie Telecom Group Ltd."
    },
    {
      symbol: "MAR.AX",
      name: "Malachite Resources Ltd"
    },
    {
      symbol: "MAS.AX",
      name: "N/A"
    },
    {
      symbol: "MAT.AX",
      name: "Matsa Resources Limited"
    },
    {
      symbol: "MAU.AX",
      name: "Magnetic Resources NL"
    },
    {
      symbol: "MAX.AX",
      name: "Millinium's Alternative Fund"
    },
    {
      symbol: "MAY.AX",
      name: "Melbana Energy Ltd"
    },
    {
      symbol: "MBC.AX",
      name: "N/A"
    },
    {
      symbol: "MBD.AX",
      name: "N/A"
    },
    {
      symbol: "MBK.AX",
      name: "Metal Bank Ltd"
    },
    {
      symbol: "MBM.AX",
      name: "Mobecom Ltd"
    },
    {
      symbol: "MBN.AX",
      name: "N/A"
    },
    {
      symbol: "MBO.AX",
      name: "N/A"
    },
    {
      symbol: "MBT.AX",
      name: "Mission Newenergy Limited"
    },
    {
      symbol: "MCA.AX",
      name: "Murray Cod Australia Ltd"
    },
    {
      symbol: "MCE.AX",
      name: "Matrix Composites & Engineering Limited"
    },
    {
      symbol: "MCH.AX",
      name: "N/A"
    },
    {
      symbol: "MCM.AX",
      name: "MC Mining Ltd"
    },
    {
      symbol: "MCP.AX",
      name: "McPherson's Ltd"
    },
    {
      symbol: "MCR.AX",
      name: "Mincor Resources NL"
    },
    {
      symbol: "MCS.AX",
      name: "N/A"
    },
    {
      symbol: "MCT.AX",
      name: "Metalicity Ltd"
    },
    {
      symbol: "MCX.AX",
      name: "Mariner Corporation Limited"
    },
    {
      symbol: "MCY.AX",
      name: "Mercury NZ Ltd"
    },
    {
      symbol: "MDC.AX",
      name: "Medlab Clinical Ltd"
    },
    {
      symbol: "MDD.AX",
      name: "N/A"
    },
    {
      symbol: "MDG.AX",
      name: "N/A"
    },
    {
      symbol: "MDI.AX",
      name: "Middle Island Resources Ltd"
    },
    {
      symbol: "MDL.AX",
      name: "N/A"
    },
    {
      symbol: "MDR.AX",
      name: "Medadvisor Ltd"
    },
    {
      symbol: "MDX.AX",
      name: "N/A"
    },
    {
      symbol: "MEA.AX",
      name: "Mcgrath Ltd"
    },
    {
      symbol: "MEB.AX",
      name: "Medibio Ltd"
    },
    {
      symbol: "MEC.AX",
      name: "MORPHICEEF/ORD UNRESTR NPV"
    },
    {
      symbol: "MED.AX",
      name: "N/A"
    },
    {
      symbol: "MEI.AX",
      name: "Meteoric Resources NL"
    },
    {
      symbol: "MEL.AX",
      name: "Metgasco Limited"
    },
    {
      symbol: "MEM.AX",
      name: "Memphasys Ltd"
    },
    {
      symbol: "MEO.AX",
      name: "N/A"
    },
    {
      symbol: "MEP.AX",
      name: "Minotaur Exploration Ltd"
    },
    {
      symbol: "MEU.AX",
      name: "Marmota Ltd"
    },
    {
      symbol: "MEY.AX",
      name: "Marenica Energy Ltd"
    },
    {
      symbol: "MEZ.AX",
      name: "Meridian Energy Ltd"
    },
    {
      symbol: "MFD.AX",
      name: "Mayfield Childcare Ltd"
    },
    {
      symbol: "MFF.AX",
      name: "MFF Capital Investments Ltd"
    },
    {
      symbol: "MFG.AX",
      name: "Magellan Financial Group Ltd"
    },
    {
      symbol: "MGC.AX",
      name: "MG Unit Trust"
    },
    {
      symbol: "MGE.AX",
      name: "MAGELLGEF/FD"
    },
    {
      symbol: "MGG.AX",
      name: "Magellan Global Trust"
    },
    {
      symbol: "MGL.AX",
      name: "Magontec Ltd"
    },
    {
      symbol: "MGP.AX",
      name: "N/A"
    },
    {
      symbol: "MGR.AX",
      name: "Mirvac Group"
    },
    {
      symbol: "MGT.AX",
      name: "Magnetite Mines Ltd"
    },
    {
      symbol: "MGU.AX",
      name: "Magnum Mining and Exploration Ltd."
    },
    {
      symbol: "MGV.AX",
      name: "Musgrave Minerals Ltd"
    },
    {
      symbol: "MGX.AX",
      name: "Mount Gibson Iron Limited"
    },
    {
      symbol: "MGZ.AX",
      name: "N/A"
    },
    {
      symbol: "MHC.AX",
      name: "Manhattan Corp Ltd"
    },
    {
      symbol: "MHD.AX",
      name: "N/A"
    },
    {
      symbol: "MHG.AX",
      name: "MGEF CH/FD"
    },
    {
      symbol: "MHH.AX",
      name: "Magellan High Conviction Trust"
    },
    {
      symbol: "MHI.AX",
      name: "Merchant House International Limited"
    },
    {
      symbol: "MHJ.AX",
      name: "Michael Hill International Ltd"
    },
    {
      symbol: "MICH.AX",
      name: "MIF CH/FD"
    },
    {
      symbol: "MIG.AX",
      name: "N/A"
    },
    {
      symbol: "MIH.AX",
      name: "MNC INVEST/IDR RSTD"
    },
    {
      symbol: "MIL.AX",
      name: "Millennium Services Group Ltd"
    },
    {
      symbol: "MIN.AX",
      name: "Mineral Resources Limited"
    },
    {
      symbol: "MIO.AX",
      name: "MACARTHURM/ORD UNRESTR NPV"
    },
    {
      symbol: "MIR.AX",
      name: "Mirrabooka Investments Ltd"
    },
    {
      symbol: "MJC.AX",
      name: "Mejority Capital Ltd"
    },
    {
      symbol: "MJP.AX",
      name: "N/A"
    },
    {
      symbol: "MKB.AX",
      name: "N/A"
    },
    {
      symbol: "MKE.AX",
      name: "N/A"
    },
    {
      symbol: "MKG.AX",
      name: "Mako Gold Ltd"
    },
    {
      symbol: "MKO.AX",
      name: "N/A"
    },
    {
      symbol: "MLA.AX",
      name: "N/A"
    },
    {
      symbol: "MLB.AX",
      name: "N/A"
    },
    {
      symbol: "MLD.AX",
      name: "Maca Ltd"
    },
    {
      symbol: "MLI.AX",
      name: "N/A"
    },
    {
      symbol: "MLL.AX",
      name: "Mali Lithium Ltd"
    },
    {
      symbol: "MLM.AX",
      name: "Metallica Minerals Limited"
    },
    {
      symbol: "MLS.AX",
      name: "Metals Australia Ltd."
    },
    {
      symbol: "MLT.AX",
      name: "Milton Corporation Limited"
    },
    {
      symbol: "MLX.AX",
      name: "Metals X Limited"
    },
    {
      symbol: "MME.AX",
      name: "Moneyme Ltd"
    },
    {
      symbol: "MMG.AX",
      name: "MMG/IDR UNRESTR"
    },
    {
      symbol: "MMI.AX",
      name: "Metro Mining Ltd"
    },
    {
      symbol: "MMJ.AX",
      name: "MMJ Group Holdings Ltd"
    },
    {
      symbol: "MML.AX",
      name: "Medusa Mining Limited"
    },
    {
      symbol: "MMM.AX",
      name: "Marley Spoon AG"
    },
    {
      symbol: "MMR.AX",
      name: "MEC Resources Limited"
    },
    {
      symbol: "MMS.AX",
      name: "McMillan Shakespeare Limited"
    },
    {
      symbol: "MNB.AX",
      name: "Minbos Resources Ltd"
    },
    {
      symbol: "MNC.AX",
      name: "METMINCO/ORD UNRESTR NPV"
    },
    {
      symbol: "MND.AX",
      name: "Monadelphous Group Limited"
    },
    {
      symbol: "MNF.AX",
      name: "MNF Group Ltd"
    },
    {
      symbol: "MNS.AX",
      name: "Magnis Energy Technologies Ltd"
    },
    {
      symbol: "MNW.AX",
      name: "Mint Payments Ltd"
    },
    {
      symbol: "MNY.AX",
      name: "Money3 Corporation Limited"
    },
    {
      symbol: "MOAT.AX",
      name: "VE MOAT/ETF"
    },
    {
      symbol: "MOB.AX",
      name: "Mobilicom Ltd"
    },
    {
      symbol: "MOC.AX",
      name: "Mortgage Choice Limited"
    },
    {
      symbol: "MOD.AX",
      name: "Mod Resources Ltd"
    },
    {
      symbol: "MOE.AX",
      name: "Moelis Australia Ltd"
    },
    {
      symbol: "MOGL.AX",
      name: "MOGF MF/FD"
    },
    {
      symbol: "MOH.AX",
      name: "Moho Resources Ltd"
    },
    {
      symbol: "MOL.AX",
      name: "N/A"
    },
    {
      symbol: "MOQ.AX",
      name: "MOQ Ltd"
    },
    {
      symbol: "MOT.AX",
      name: "MCP Income Opportunities Trust"
    },
    {
      symbol: "MOX.AX",
      name: "N/A"
    },
    {
      symbol: "MOY.AX",
      name: "Millennium Minerals Ltd."
    },
    {
      symbol: "MOZ.AX",
      name: "Mosaic Brands Ltd"
    },
    {
      symbol: "MP1.AX",
      name: "Megaport Ltd"
    },
    {
      symbol: "MPH.AX",
      name: "Mediland Pharm Ltd"
    },
    {
      symbol: "MPL.AX",
      name: "Medibank Private Ltd"
    },
    {
      symbol: "MPO.AX",
      name: "N/A"
    },
    {
      symbol: "MPP.AX",
      name: "Metro Performance Glass Ltd"
    },
    {
      symbol: "MPR.AX",
      name: "Mpower Group Ltd"
    },
    {
      symbol: "MPW.AX",
      name: "MSL Solutions Ltd"
    },
    {
      symbol: "MPX.AX",
      name: "Mustera Property Group Ltd"
    },
    {
      symbol: "MQA.AX",
      name: "N/A"
    },
    {
      symbol: "MQG.AX",
      name: "Macquarie Group Ltd"
    },
    {
      symbol: "MQR.AX",
      name: "Marquee Resources Ltd"
    },
    {
      symbol: "MRC.AX",
      name: "Mineral Commodities Limited"
    },
    {
      symbol: "MRD.AX",
      name: "Mount Ridley Mines Ltd"
    },
    {
      symbol: "MRG.AX",
      name: "Murray River Organics Ltd"
    },
    {
      symbol: "MRL.AX",
      name: "Mayur Resources Ltd"
    },
    {
      symbol: "MRM.AX",
      name: "MMA Offshore Ltd"
    },
    {
      symbol: "MRN.AX",
      name: "Macquarie Media Ltd"
    },
    {
      symbol: "MRP.AX",
      name: "Macphersons Resources Ltd"
    },
    {
      symbol: "MRQ.AX",
      name: "MRG Metals Ltd"
    },
    {
      symbol: "MRR.AX",
      name: "Minrex Resources Ltd"
    },
    {
      symbol: "MRV.AX",
      name: "Moreton Resources Ltd"
    },
    {
      symbol: "MRZ.AX",
      name: "Mont Royal Resources Ltd"
    },
    {
      symbol: "MSB.AX",
      name: "Mesoblast limited"
    },
    {
      symbol: "MSE.AX",
      name: "Metalsearch Ltd"
    },
    {
      symbol: "MSG.AX",
      name: "MCS Services Ltd"
    },
    {
      symbol: "MSI.AX",
      name: "Multistack International Limited"
    },
    {
      symbol: "MSM.AX",
      name: "MSM Corporation International Ltd"
    },
    {
      symbol: "MSP.AX",
      name: "N/A"
    },
    {
      symbol: "MSR.AX",
      name: "Manas Resources Limited"
    },
    {
      symbol: "MSV.AX",
      name: "Mitchell Services Ltd"
    },
    {
      symbol: "MTB.AX",
      name: "Mount Burgess Mining N.L."
    },
    {
      symbol: "MTC.AX",
      name: "Metalstech Ltd"
    },
    {
      symbol: "MTD.AX",
      name: "N/A"
    },
    {
      symbol: "MTH.AX",
      name: "Mithril Resources Limited"
    },
    {
      symbol: "MTL.AX",
      name: "Manalto Ltd"
    },
    {
      symbol: "MTM.AX",
      name: "N/A"
    },
    {
      symbol: "MTO.AX",
      name: "MotorCycle Holdings Ltd"
    },
    {
      symbol: "MTR.AX",
      name: "N/A"
    },
    {
      symbol: "MTS.AX",
      name: "Metcash Limited"
    },
    {
      symbol: "MTU.AX",
      name: "N/A"
    },
    {
      symbol: "MUA.AX",
      name: "N/A"
    },
    {
      symbol: "MUB.AX",
      name: "N/A"
    },
    {
      symbol: "MUE.AX",
      name: "N/A"
    },
    {
      symbol: "MUS.AX",
      name: "N/A"
    },
    {
      symbol: "MVA.AX",
      name: "VE PROPRTY/ETF"
    },
    {
      symbol: "MVB.AX",
      name: "VE BANKS/ETF"
    },
    {
      symbol: "MVE.AX",
      name: "VE MIDCAP/ETF"
    },
    {
      symbol: "MVF.AX",
      name: "Monash IVF Group Ltd"
    },
    {
      symbol: "MVP.AX",
      name: "Medical Developments International Ltd"
    },
    {
      symbol: "MVR.AX",
      name: "VE RESOURC/ETF"
    },
    {
      symbol: "MVS.AX",
      name: "VE SMALL/ETF"
    },
    {
      symbol: "MVT.AX",
      name: "Mercantile Investment Co"
    },
    {
      symbol: "MVW.AX",
      name: "VE EQ WGHT/ETF"
    },
    {
      symbol: "MWR.AX",
      name: "MGM Wireless Limited"
    },
    {
      symbol: "MWY.AX",
      name: "Midway Ltd"
    },
    {
      symbol: "MX1.AX",
      name: "Micro-X Ltd"
    },
    {
      symbol: "MXC.AX",
      name: "MGC Pharmaceuticals Ltd"
    },
    {
      symbol: "MXI.AX",
      name: "MaxiTRANS Industries Limited"
    },
    {
      symbol: "MXR.AX",
      name: "Maximus Resources Limited"
    },
    {
      symbol: "MXT.AX",
      name: "MCP Master Income Trust"
    },
    {
      symbol: "MYE.AX",
      name: "Mastermyne Group Limited"
    },
    {
      symbol: "MYL.AX",
      name: "Top End Minerals Ltd"
    },
    {
      symbol: "MYO.AX",
      name: "N/A"
    },
    {
      symbol: "MYQ.AX",
      name: "MyFiziq Ltd"
    },
    {
      symbol: "MYR.AX",
      name: "Myer Holdings Ltd"
    },
    {
      symbol: "MYS.AX",
      name: "MyState Limited"
    },
    {
      symbol: "MYX.AX",
      name: "Mayne Pharma Group Ltd"
    },
    {
      symbol: "MZI.AX",
      name: "N/A"
    },
    {
      symbol: "MZM.AX",
      name: "N/A"
    },
    {
      symbol: "MZN.AX",
      name: "Marindi Metals Ltd"
    },
    {
      symbol: "MZZ.AX",
      name: "Matador Mining Ltd"
    },
    {
      symbol: "N1H.AX",
      name: "N1 Holdings Ltd"
    },
    {
      symbol: "N27.AX",
      name: "Northern Cobalt Ltd"
    },
    {
      symbol: "NAB.AX",
      name: "National Australia Bank Ltd."
    },
    {
      symbol: "NAC.AX",
      name: "NAOS Ex-50 Opportunities Company Ltd"
    },
    {
      symbol: "NAE.AX",
      name: "New Age Exploration Limited"
    },
    {
      symbol: "NAG.AX",
      name: "Nagambie Resources Ltd"
    },
    {
      symbol: "NAM.AX",
      name: "Namoi Cotton Ltd"
    },
    {
      symbol: "NAN.AX",
      name: "Nanosonics Ltd."
    },
    {
      symbol: "NAV.AX",
      name: "N/A"
    },
    {
      symbol: "NBI.AX",
      name: "NB Global Corporate Income Trust"
    },
    {
      symbol: "NBL.AX",
      name: "N/A"
    },
    {
      symbol: "NC6.AX",
      name: "Nanollose Ltd"
    },
    {
      symbol: "NCC.AX",
      name: "Naos Emerging Opportunities Company Ltd"
    },
    {
      symbol: "NCK.AX",
      name: "Nick Scali Limited"
    },
    {
      symbol: "NCL.AX",
      name: "Netccentric Ltd"
    },
    {
      symbol: "NCM.AX",
      name: "Newcrest Mining Limited"
    },
    {
      symbol: "NCR.AX",
      name: "Nucoal Resources Ltd"
    },
    {
      symbol: "NCZ.AX",
      name: "New Century Resources Ltd"
    },
    {
      symbol: "NDO.AX",
      name: "N/A"
    },
    {
      symbol: "NDQ.AX",
      name: "BETANASDAQ/ETF"
    },
    {
      symbol: "NEA.AX",
      name: "Nearmap Ltd"
    },
    {
      symbol: "NEC.AX",
      name: "Nine Entertainment Co Holdings Ltd"
    },
    {
      symbol: "NEN.AX",
      name: "N/A"
    },
    {
      symbol: "NES.AX",
      name: "Nelson Resources Ltd"
    },
    {
      symbol: "NET.AX",
      name: "Netlinkz Ltd"
    },
    {
      symbol: "NEU.AX",
      name: "Neuren Pharmaceuticals Ltd"
    },
    {
      symbol: "NEW.AX",
      name: "New Energy Solar Ltd"
    },
    {
      symbol: "NGE.AX",
      name: "NGE Capital Ltd"
    },
    {
      symbol: "NGI.AX",
      name: "Navigator Global Investments Ltd"
    },
    {
      symbol: "NGX.AX",
      name: "N/A"
    },
    {
      symbol: "NGY.AX",
      name: "Nuenergy Gas Ltd"
    },
    {
      symbol: "NHC.AX",
      name: "New Hope Corporation Limited"
    },
    {
      symbol: "NHF.AX",
      name: "NIB Holdings Limited"
    },
    {
      symbol: "NHH.AX",
      name: "N/A"
    },
    {
      symbol: "NHL.AX",
      name: "Tali Digital Ltd"
    },
    {
      symbol: "NIC.AX",
      name: "Nickel Mines Ltd"
    },
    {
      symbol: "NIO.AX",
      name: "N/A"
    },
    {
      symbol: "NIU.AX",
      name: "N/A"
    },
    {
      symbol: "NKP.AX",
      name: "N/A"
    },
    {
      symbol: "NLI.AX",
      name: "N/A"
    },
    {
      symbol: "NME.AX",
      name: "Nex Metals Explorations Ltd"
    },
    {
      symbol: "NMG.AX",
      name: "N/A"
    },
    {
      symbol: "NMI.AX",
      name: "N/A"
    },
    {
      symbol: "NML.AX",
      name: "Navarre Minerals Limited"
    },
    {
      symbol: "NMM.AX",
      name: "N/A"
    },
    {
      symbol: "NMS.AX",
      name: "Neptune Marine Services Ltd"
    },
    {
      symbol: "NMT.AX",
      name: "Neometals Ltd"
    },
    {
      symbol: "NNW.AX",
      name: "99 Wuxian Ltd"
    },
    {
      symbol: "NOE.AX",
      name: "N/A"
    },
    {
      symbol: "NOR.AX",
      name: "Norwood Systems Ltd"
    },
    {
      symbol: "NOV.AX",
      name: "Novatti Group Ltd"
    },
    {
      symbol: "NOX.AX",
      name: "Noxopharm Ltd"
    },
    {
      symbol: "NPX.AX",
      name: "N/A"
    },
    {
      symbol: "NSB.AX",
      name: "Neuroscientific Biopharmaceuticals Ltd"
    },
    {
      symbol: "NSC.AX",
      name: "NAOS Small Cap Opportunities Company Ltd"
    },
    {
      symbol: "NSE.AX",
      name: "New Standard Energy Limited"
    },
    {
      symbol: "NSL.AX",
      name: "N/A"
    },
    {
      symbol: "NSR.AX",
      name: "National Storage REIT"
    },
    {
      symbol: "NST.AX",
      name: "Northern Star Resources Ltd"
    },
    {
      symbol: "NSX.AX",
      name: "Nsx Ltd"
    },
    {
      symbol: "NTC.AX",
      name: "N/A"
    },
    {
      symbol: "NTD.AX",
      name: "National Tyre & Wheel Ltd"
    },
    {
      symbol: "NTI.AX",
      name: "Neurotech International Ltd"
    },
    {
      symbol: "NTL.AX",
      name: "New Talisman Gold Mines Ltd"
    },
    {
      symbol: "NTM.AX",
      name: "NTM Gold Ltd"
    },
    {
      symbol: "NTO.AX",
      name: "Nitro Software Ltd"
    },
    {
      symbol: "NTU.AX",
      name: "Northern Minerals Ltd"
    },
    {
      symbol: "NUC.AX",
      name: "Nuchev Ltd"
    },
    {
      symbol: "NUF.AX",
      name: "Nufarm Limited"
    },
    {
      symbol: "NUH.AX",
      name: "Nuheara Ltd"
    },
    {
      symbol: "NUS.AX",
      name: "Nusantara Resources Ltd"
    },
    {
      symbol: "NVA.AX",
      name: "Nova Minerals Ltd"
    },
    {
      symbol: "NVL.AX",
      name: "National Veterinary Care Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "NVO.AX",
      name: "Nvoi Ltd"
    },
    {
      symbol: "NVT.AX",
      name: "N/A"
    },
    {
      symbol: "NVU.AX",
      name: "Nanoveu Ltd"
    },
    {
      symbol: "NVX.AX",
      name: "Novonix Ltd"
    },
    {
      symbol: "NWC.AX",
      name: "New World Resources Ltd"
    },
    {
      symbol: "NWE.AX",
      name: "Norwest Energy NL"
    },
    {
      symbol: "NWF.AX",
      name: "Newfield Resources Ltd"
    },
    {
      symbol: "NWH.AX",
      name: "NRW Holdings Limited"
    },
    {
      symbol: "NWL.AX",
      name: "Netwealth Group Ltd"
    },
    {
      symbol: "NWM.AX",
      name: "Norwest Minerals Ltd"
    },
    {
      symbol: "NWR.AX",
      name: "N/A"
    },
    {
      symbol: "NWS.AX",
      name: "NEWS CORP/IDR UNRESTR"
    },
    {
      symbol: "NWSLV.AX",
      name: "N/A"
    },
    {
      symbol: "NWT.AX",
      name: "N/A"
    },
    {
      symbol: "NXE.AX",
      name: "New Energy Minerals Ltd"
    },
    {
      symbol: "NXM.AX",
      name: "Nexus Minerals Ltd"
    },
    {
      symbol: "NXR.AX",
      name: "N/A"
    },
    {
      symbol: "NXS.AX",
      name: "Next Science Ltd"
    },
    {
      symbol: "NXT.AX",
      name: "Nextdc Ltd"
    },
    {
      symbol: "NZC.AX",
      name: "Nzuri Copper Ltd"
    },
    {
      symbol: "NZK.AX",
      name: "New Zealand King Salmon Co Ltd"
    },
    {
      symbol: "NZM.AX",
      name: "NZME Ltd"
    },
    {
      symbol: "NZO.AX",
      name: "N/A"
    },
    {
      symbol: "NZS.AX",
      name: "New Zealand Coastal Seafoods Ltd"
    },
    {
      symbol: "OAR.AX",
      name: "Oakdale Resources Ltd"
    },
    {
      symbol: "OAU.AX",
      name: "Ora Gold Ltd"
    },
    {
      symbol: "OBJ.AX",
      name: "OBJ Limited"
    },
    {
      symbol: "OBM.AX",
      name: "Ora Banda Mining Ltd"
    },
    {
      symbol: "OCA.AX",
      name: "Oceania Healthcare Ltd"
    },
    {
      symbol: "OCC.AX",
      name: "Orthocell Ltd"
    },
    {
      symbol: "OCL.AX",
      name: "Objective Corporation Limited"
    },
    {
      symbol: "OCP.AX",
      name: "N/A"
    },
    {
      symbol: "ODA.AX",
      name: "Orcoda Ltd"
    },
    {
      symbol: "ODM.AX",
      name: "Odin Metals Ltd"
    },
    {
      symbol: "ODN.AX",
      name: "N/A"
    },
    {
      symbol: "ODY.AX",
      name: "Odyssey Energy Limited"
    },
    {
      symbol: "OEC.AX",
      name: "Orbital Corporation Ltd."
    },
    {
      symbol: "OEL.AX",
      name: "Otto Energy Limited"
    },
    {
      symbol: "OEQ.AX",
      name: "Orion Equities Limited"
    },
    {
      symbol: "OEX.AX",
      name: "OILEX LTD."
    },
    {
      symbol: "OFX.AX",
      name: "OFX Group Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "OGA.AX",
      name: "Ocean Grown Abalone Ltd"
    },
    {
      symbol: "OGC.AX",
      name: "OceanaGold Corp"
    },
    {
      symbol: "OGH.AX",
      name: "N/A"
    },
    {
      symbol: "OGX.AX",
      name: "N/A"
    },
    {
      symbol: "OGY.AX",
      name: "N/A"
    },
    {
      symbol: "OHE.AX",
      name: "N/A"
    },
    {
      symbol: "OIL.AX",
      name: "Optiscan Imaging Limited"
    },
    {
      symbol: "OKJ.AX",
      name: "Oakajee Corporation Limited"
    },
    {
      symbol: "OKR.AX",
      name: "Okapi Resources Ltd"
    },
    {
      symbol: "OKU.AX",
      name: "Oklo Resources Ltd"
    },
    {
      symbol: "OLH.AX",
      name: "Oldfields Holdings Limited"
    },
    {
      symbol: "OLI.AX",
      name: "Oliver's Real Food Ltd"
    },
    {
      symbol: "OLL.AX",
      name: "OPENLEARN/ORD UNRESTR NPV"
    },
    {
      symbol: "OLV.AX",
      name: "Otherlevels Holdings Ltd"
    },
    {
      symbol: "OMH.AX",
      name: "OM Holdings Limited"
    },
    {
      symbol: "OML.AX",
      name: "oOh!Media Ltd"
    },
    {
      symbol: "OMT.AX",
      name: "N/A"
    },
    {
      symbol: "ONE.AX",
      name: "Oneview Healthcare PLC"
    },
    {
      symbol: "ONT.AX",
      name: "1300 Smiles Limited"
    },
    {
      symbol: "ONX.AX",
      name: "Orminex Ltd"
    },
    {
      symbol: "OOK.AX",
      name: "N/A"
    },
    {
      symbol: "OOO.AX",
      name: "BETAOIL/ETF"
    },
    {
      symbol: "OPC.AX",
      name: "Opticomm Ltd"
    },
    {
      symbol: "OPG.AX",
      name: "N/A"
    },
    {
      symbol: "OPH.AX",
      name: "Ophir High Conviction Fund"
    },
    {
      symbol: "OPL.AX",
      name: "Opyl Ltd"
    },
    {
      symbol: "OPN.AX",
      name: "OpenDNA Ltd"
    },
    {
      symbol: "OPT.AX",
      name: "Opthea Ltd"
    },
    {
      symbol: "OPY.AX",
      name: "Openpay Group Ltd"
    },
    {
      symbol: "ORA.AX",
      name: "Orora Ltd"
    },
    {
      symbol: "ORE.AX",
      name: "Orocobre Limited"
    },
    {
      symbol: "ORG.AX",
      name: "Origin Energy Ltd"
    },
    {
      symbol: "ORH.AX",
      name: "N/A"
    },
    {
      symbol: "ORI.AX",
      name: "Orica Ltd"
    },
    {
      symbol: "ORL.AX",
      name: "N/A"
    },
    {
      symbol: "ORM.AX",
      name: "Orion Metals Ltd"
    },
    {
      symbol: "ORN.AX",
      name: "Orion Minerals Ltd"
    },
    {
      symbol: "ORR.AX",
      name: "Orecorp Ltd"
    },
    {
      symbol: "ORS.AX",
      name: "N/A"
    },
    {
      symbol: "OSH.AX",
      name: "Oil Search Limited"
    },
    {
      symbol: "OSL.AX",
      name: "Oncosil Medical Ltd"
    },
    {
      symbol: "OSP.AX",
      name: "Osprey Medical Inc"
    },
    {
      symbol: "OSX.AX",
      name: "Osteopore Ltd"
    },
    {
      symbol: "OTC.AX",
      name: "N/A"
    },
    {
      symbol: "OTH.AX",
      name: "N/A"
    },
    {
      symbol: "OTI.AX",
      name: "N/A"
    },
    {
      symbol: "OTR.AX",
      name: "N/A"
    },
    {
      symbol: "OTW.AX",
      name: "Over The Wire Holdings Ltd"
    },
    {
      symbol: "OVH.AX",
      name: "Onevue Holdings Ltd"
    },
    {
      symbol: "OVL.AX",
      name: "Oro Verde Ltd"
    },
    {
      symbol: "OVN.AX",
      name: "Oventus Medical Ltd"
    },
    {
      symbol: "OVR.AX",
      name: "N/A"
    },
    {
      symbol: "OVT.AX",
      name: "Ovato Ltd"
    },
    {
      symbol: "OXX.AX",
      name: "Octanex Ltd"
    },
    {
      symbol: "OZF.AX",
      name: "SPDR FIN/ETF"
    },
    {
      symbol: "OZG.AX",
      name: "Ozgrowth Limited"
    },
    {
      symbol: "OZL.AX",
      name: "OZ Minerals Limited"
    },
    {
      symbol: "OZR.AX",
      name: "SPDR RES/ETF"
    },
    {
      symbol: "P2P.AX",
      name: "P2P Transport Ltd"
    },
    {
      symbol: "PAA.AX",
      name: "PharmAust Limited"
    },
    {
      symbol: "PAB.AX",
      name: "Patrys Limited"
    },
    {
      symbol: "PAC.AX",
      name: "Pacific Current Group Ltd"
    },
    {
      symbol: "PAF.AX",
      name: "PM Capital Asian Opportunities Fund Ltd"
    },
    {
      symbol: "PAI.AX",
      name: "Platinum Asia Investments Ltd"
    },
    {
      symbol: "PAK.AX",
      name: "Pacific American Holdings Ltd"
    },
    {
      symbol: "PAL.AX",
      name: "Palla Pharma Ltd"
    },
    {
      symbol: "PAN.AX",
      name: "Panoramic Resources Ltd"
    },
    {
      symbol: "PAR.AX",
      name: "Paradigm Biopharmaceuticals Ltd"
    },
    {
      symbol: "PAY.AX",
      name: "N/A"
    },
    {
      symbol: "PBG.AX",
      name: "N/A"
    },
    {
      symbol: "PBH.AX",
      name: "Pointsbet Holdings Ltd"
    },
    {
      symbol: "PBP.AX",
      name: "Probiotec Limited"
    },
    {
      symbol: "PBT.AX",
      name: "N/A"
    },
    {
      symbol: "PBX.AX",
      name: "Pacific Bauxite Ltd"
    },
    {
      symbol: "PCG.AX",
      name: "Pengana Capital Group Ltd"
    },
    {
      symbol: "PCH.AX",
      name: "Property Connect Holdings Ltd"
    },
    {
      symbol: "PCI.AX",
      name: "Perpetual Credit Income Trust"
    },
    {
      symbol: "PCK.AX",
      name: "PainChek Ltd"
    },
    {
      symbol: "PCL.AX",
      name: "Pancontinental Oil & Gas NL"
    },
    {
      symbol: "PCP.AX",
      name: "N/A"
    },
    {
      symbol: "PDF.AX",
      name: "N/A"
    },
    {
      symbol: "PDI.AX",
      name: "Predictive Discovery Ltd"
    },
    {
      symbol: "PDL.AX",
      name: "Pendal Group Ltd"
    },
    {
      symbol: "PDN.AX",
      name: "Paladin Energy Ltd"
    },
    {
      symbol: "PDZ.AX",
      name: "Prairie Mining Ltd"
    },
    {
      symbol: "PE1.AX",
      name: "Pengana Equity Trust Pvt"
    },
    {
      symbol: "PEA.AX",
      name: "N/A"
    },
    {
      symbol: "PEC.AX",
      name: "Perpetual Resources Ltd"
    },
    {
      symbol: "PEG.AX",
      name: "N/A"
    },
    {
      symbol: "PEK.AX",
      name: "Peak Resources Ltd."
    },
    {
      symbol: "PEL.AX",
      name: "N/A"
    },
    {
      symbol: "PEN.AX",
      name: "Peninsula Energy Ltd"
    },
    {
      symbol: "PEP.AX",
      name: "N/A"
    },
    {
      symbol: "PET.AX",
      name: "Phoslock Environmental Technologies Ltd"
    },
    {
      symbol: "PEX.AX",
      name: "Peel Mining Ltd"
    },
    {
      symbol: "PEZ.AX",
      name: "N/A"
    },
    {
      symbol: "PFG.AX",
      name: "Prime Financial Group Ltd"
    },
    {
      symbol: "PFL.AX",
      name: "N/A"
    },
    {
      symbol: "PFM.AX",
      name: "N/A"
    },
    {
      symbol: "PFP.AX",
      name: "Propel Funeral Partners Ltd"
    },
    {
      symbol: "PG1.AX",
      name: "Pearl Global Ltd"
    },
    {
      symbol: "PGC.AX",
      name: "Paragon Care Ltd."
    },
    {
      symbol: "PGF.AX",
      name: "PM Capital Global Opportunities Fund Ltd"
    },
    {
      symbol: "PGG.AX",
      name: "Partners Group Global Income Fund"
    },
    {
      symbol: "PGH.AX",
      name: "Pact Group Holdings Ltd"
    },
    {
      symbol: "PGI.AX",
      name: "Panterra Gold Ltd"
    },
    {
      symbol: "PGL.AX",
      name: "Prospa Group Ltd"
    },
    {
      symbol: "PGM.AX",
      name: "Platina Resources Limited"
    },
    {
      symbol: "PGO.AX",
      name: "N/A"
    },
    {
      symbol: "PGR.AX",
      name: "PAS Group Ltd"
    },
    {
      symbol: "PGS.AX",
      name: "N/A"
    },
    {
      symbol: "PGX.AX",
      name: "Primero Group Ltd"
    },
    {
      symbol: "PGY.AX",
      name: "Pilot Energy Ltd"
    },
    {
      symbol: "PHA.AX",
      name: "N/A"
    },
    {
      symbol: "PHG.AX",
      name: "N/A"
    },
    {
      symbol: "PHI.AX",
      name: "N/A"
    },
    {
      symbol: "PHK.AX",
      name: "N/A"
    },
    {
      symbol: "PIA.AX",
      name: "Pengana International Equities Ltd"
    },
    {
      symbol: "PIC.AX",
      name: "Perpetual Equity Investment Company Ltd"
    },
    {
      symbol: "PIL.AX",
      name: "Peppermint Innovation Ltd"
    },
    {
      symbol: "PIN.AX",
      name: "PINCHme.com Inc"
    },
    {
      symbol: "PIO.AX",
      name: "Pioneer Resources Ltd"
    },
    {
      symbol: "PIQ.AX",
      name: "Proteomics International LaboratoriesLtd"
    },
    {
      symbol: "PKA.AX",
      name: "Tesoro Resources Ltd"
    },
    {
      symbol: "PKD.AX",
      name: "Parkd Ltd"
    },
    {
      symbol: "PKO.AX",
      name: "Peako Ltd"
    },
    {
      symbol: "PKS.AX",
      name: "PKS Holdings Ltd"
    },
    {
      symbol: "PL8.AX",
      name: "Plato Income Maximiser Ltd"
    },
    {
      symbol: "PLA.AX",
      name: "N/A"
    },
    {
      symbol: "PLC.AX",
      name: "N/A"
    },
    {
      symbol: "PLG.AX",
      name: "N/A"
    },
    {
      symbol: "PLH.AX",
      name: "N/A"
    },
    {
      symbol: "PLL.AX",
      name: "Piedmont Lithium Ltd"
    },
    {
      symbol: "PLS.AX",
      name: "Pilbara Minerals Ltd"
    },
    {
      symbol: "PLV.AX",
      name: "N/A"
    },
    {
      symbol: "PLX.AX",
      name: "PYROLYX/IDR UNRESTR"
    },
    {
      symbol: "PM1.AX",
      name: "Eagle Nickel Limited"
    },
    {
      symbol: "PM8.AX",
      name: "Pensana Metals Ltd"
    },
    {
      symbol: "PMC.AX",
      name: "Platinum Capital Limited"
    },
    {
      symbol: "PME.AX",
      name: "Pro Medicus Limited"
    },
    {
      symbol: "PMP.AX",
      name: "N/A"
    },
    {
      symbol: "PMV.AX",
      name: "Premier Investments Limited"
    },
    {
      symbol: "PMY.AX",
      name: "Pacifico Minerals Ltd"
    },
    {
      symbol: "PNA.AX",
      name: "N/A"
    },
    {
      symbol: "PNC.AX",
      name: "Pioneer Credit Ltd"
    },
    {
      symbol: "PNI.AX",
      name: "Pinnacle Investment Management Group Ltd"
    },
    {
      symbol: "PNL.AX",
      name: "Paringa Resources Ltd"
    },
    {
      symbol: "PNN.AX",
      name: "Pepinnini Lithium Ltd"
    },
    {
      symbol: "PNR.AX",
      name: "Pantoro Ltd"
    },
    {
      symbol: "PNV.AX",
      name: "Polynovo Ltd"
    },
    {
      symbol: "PNW.AX",
      name: "Pacific Star Network Limited"
    },
    {
      symbol: "PNX.AX",
      name: "PNX Metals Ltd"
    },
    {
      symbol: "PO3.AX",
      name: "Purifloh Ltd"
    },
    {
      symbol: "POD.AX",
      name: "Podium Minerals Ltd"
    },
    {
      symbol: "POH.AX",
      name: "N/A"
    },
    {
      symbol: "POS.AX",
      name: "Poseidon Nickel Ltd"
    },
    {
      symbol: "POW.AX",
      name: "Protean Energy Ltd"
    },
    {
      symbol: "POZ.AX",
      name: "N/A"
    },
    {
      symbol: "PPC.AX",
      name: "Peet Limited"
    },
    {
      symbol: "PPE.AX",
      name: "People Infrastructure Ltd"
    },
    {
      symbol: "PPG.AX",
      name: "Pro-Pac Packaging Limited"
    },
    {
      symbol: "PPH.AX",
      name: "Pushpay Holdings Ltd"
    },
    {
      symbol: "PPK.AX",
      name: "PPK Group Limited"
    },
    {
      symbol: "PPL.AX",
      name: "Pureprofile Ltd"
    },
    {
      symbol: "PPN.AX",
      name: "N/A"
    },
    {
      symbol: "PPP.AX",
      name: "N/A"
    },
    {
      symbol: "PPS.AX",
      name: "Praemium Ltd"
    },
    {
      symbol: "PPT.AX",
      name: "Perpetual Limited"
    },
    {
      symbol: "PPY.AX",
      name: "Papyrus Australia Ltd."
    },
    {
      symbol: "PRG.AX",
      name: "N/A"
    },
    {
      symbol: "PRH.AX",
      name: "N/A"
    },
    {
      symbol: "PRL.AX",
      name: "N/A"
    },
    {
      symbol: "PRM.AX",
      name: "Prominence Energy NL"
    },
    {
      symbol: "PRN.AX",
      name: "Perenti Global Ltd"
    },
    {
      symbol: "PRO.AX",
      name: "Prophecy International Holdings Limited"
    },
    {
      symbol: "PRT.AX",
      name: "Prime Media Group Limited"
    },
    {
      symbol: "PRU.AX",
      name: "Perseus Mining Limited"
    },
    {
      symbol: "PRX.AX",
      name: "Prodigy Gold NL"
    },
    {
      symbol: "PRY.AX",
      name: "N/A"
    },
    {
      symbol: "PRZ.AX",
      name: "Parazero Ltd"
    },
    {
      symbol: "PSA.AX",
      name: "Petsec Energy Ltd."
    },
    {
      symbol: "PSC.AX",
      name: "Prospect Resources Ltd"
    },
    {
      symbol: "PSI.AX",
      name: "PSC Insurance Group Ltd"
    },
    {
      symbol: "PSM.AX",
      name: "Peninsula Mines Ltd"
    },
    {
      symbol: "PSQ.AX",
      name: "Pacific Smiles Group Ltd"
    },
    {
      symbol: "PSY.AX",
      name: "N/A"
    },
    {
      symbol: "PSZ.AX",
      name: "PS&C Ltd"
    },
    {
      symbol: "PTB.AX",
      name: "PTB Group Ltd."
    },
    {
      symbol: "PTL.AX",
      name: "Pental Ltd"
    },
    {
      symbol: "PTM.AX",
      name: "Platinum Asset Management Ltd"
    },
    {
      symbol: "PTR.AX",
      name: "Petratherm Ltd"
    },
    {
      symbol: "PTX.AX",
      name: "Prescient Therapeutics Ltd"
    },
    {
      symbol: "PUA.AX",
      name: "Pure Alumina Ltd"
    },
    {
      symbol: "PUN.AX",
      name: "N/A"
    },
    {
      symbol: "PUR.AX",
      name: "Pursuit Minerals Ltd"
    },
    {
      symbol: "PVA.AX",
      name: "N/A"
    },
    {
      symbol: "PVD.AX",
      name: "Pura Vida Energy NL"
    },
    {
      symbol: "PVE.AX",
      name: "Po Valley Energy Limited"
    },
    {
      symbol: "PVL.AX",
      name: "PowerHouse Ventures Ltd"
    },
    {
      symbol: "PVS.AX",
      name: "Pivotal Systems Corp Inc"
    },
    {
      symbol: "PWG.AX",
      name: "Primewest Group Ltd"
    },
    {
      symbol: "PWH.AX",
      name: "PWR Holdings Ltd"
    },
    {
      symbol: "PWL.AX",
      name: "Powerwrap Ltd"
    },
    {
      symbol: "PWN.AX",
      name: "Parkway Minerals NL"
    },
    {
      symbol: "PXG.AX",
      name: "N/A"
    },
    {
      symbol: "PXS.AX",
      name: "Pharmaxis Ltd."
    },
    {
      symbol: "PXX.AX",
      name: "Polarx Ltd"
    },
    {
      symbol: "PYC.AX",
      name: "PYC Therapeutics Ltd"
    },
    {
      symbol: "PYG.AX",
      name: "PayGroup Ltd"
    },
    {
      symbol: "PZC.AX",
      name: "N/A"
    },
    {
      symbol: "QAG.AX",
      name: "BETAAG/ETF"
    },
    {
      symbol: "QAN.AX",
      name: "Qantas Airways Limited"
    },
    {
      symbol: "QAU.AX",
      name: "BETA GOLD/ETF"
    },
    {
      symbol: "QBE.AX",
      name: "QBE Insurance Group Ltd"
    },
    {
      symbol: "QBL.AX",
      name: "N/A"
    },
    {
      symbol: "QCB.AX",
      name: "BETACOMMOD/ETF"
    },
    {
      symbol: "QEM.AX",
      name: "QEM Ltd"
    },
    {
      symbol: "QFE.AX",
      name: "QuickFee Ltd"
    },
    {
      symbol: "QFN.AX",
      name: "BETAASXFIN/ETF"
    },
    {
      symbol: "QFY.AX",
      name: "Quantify Technology Holdings Ltd"
    },
    {
      symbol: "QGL.AX",
      name: "Quantum Graphite Ltd"
    },
    {
      symbol: "QHL.AX",
      name: "Quickstep Holdings Limited"
    },
    {
      symbol: "QIN.AX",
      name: "N/A"
    },
    {
      symbol: "QIP.AX",
      name: "QANTM Intellectual Property Ltd"
    },
    {
      symbol: "QMN.AX",
      name: "N/A"
    },
    {
      symbol: "QMS.AX",
      name: "N/A"
    },
    {
      symbol: "QOZ.AX",
      name: "BETARAFI/ETF"
    },
    {
      symbol: "QPON.AX",
      name: "BETAQPON/ETF"
    },
    {
      symbol: "QPR.AX",
      name: "Quattro Plus Real Estate"
    },
    {
      symbol: "QRE.AX",
      name: "BETAASXRES/ETF"
    },
    {
      symbol: "QRI.AX",
      name: "Qualitas Real Estate Income Fund"
    },
    {
      symbol: "QRX.AX",
      name: "N/A"
    },
    {
      symbol: "QSS.AX",
      name: "N/A"
    },
    {
      symbol: "QST.AX",
      name: "N/A"
    },
    {
      symbol: "QTG.AX",
      name: "Q Technology Group Ltd"
    },
    {
      symbol: "QTM.AX",
      name: "Quantum Health Group Ltd"
    },
    {
      symbol: "QUAL.AX",
      name: "VE WD QUAL/ETF"
    },
    {
      symbol: "QUB.AX",
      name: "Qube Holdings Ltd"
    },
    {
      symbol: "QUE.AX",
      name: "Queste Communications Limited"
    },
    {
      symbol: "QVE.AX",
      name: "QV Equities Ltd"
    },
    {
      symbol: "R3D.AX",
      name: "R3D Global Ltd"
    },
    {
      symbol: "RAC.AX",
      name: "Race Oncology Ltd"
    },
    {
      symbol: "RAF.AX",
      name: "N/A"
    },
    {
      symbol: "RAG.AX",
      name: "Ragnar Metals Ltd"
    },
    {
      symbol: "RAN.AX",
      name: "Range International Ltd"
    },
    {
      symbol: "RAP.AX",
      name: "Resapp Health Ltd"
    },
    {
      symbol: "RARI.AX",
      name: "RARIETF/ETF"
    },
    {
      symbol: "RAW.AX",
      name: "N/A"
    },
    {
      symbol: "RBL.AX",
      name: "Redbubble Ltd"
    },
    {
      symbol: "RBO.AX",
      name: "N/A"
    },
    {
      symbol: "RBR.AX",
      name: "RBR Group Ltd"
    },
    {
      symbol: "RBX.AX",
      name: "N/A"
    },
    {
      symbol: "RCB.AX",
      name: "RUSCRPBETF/ETF"
    },
    {
      symbol: "RCE.AX",
      name: "Recce Pharmaceuticals Ltd"
    },
    {
      symbol: "RCF.AX",
      name: "N/A"
    },
    {
      symbol: "RCL.AX",
      name: "ReadCloud Ltd"
    },
    {
      symbol: "RCO.AX",
      name: "Royalco Resources"
    },
    {
      symbol: "RCP.AX",
      name: "N/A"
    },
    {
      symbol: "RCR.AX",
      name: "N/A"
    },
    {
      symbol: "RCT.AX",
      name: "Reef Casino Trust"
    },
    {
      symbol: "RCW.AX",
      name: "Rightcrowd Ltd"
    },
    {
      symbol: "RCY.AX",
      name: "N/A"
    },
    {
      symbol: "RD1.AX",
      name: "Registry Direct Ltd"
    },
    {
      symbol: "RDC.AX",
      name: "Redcape Hotel Group Pty Ltd"
    },
    {
      symbol: "RDF.AX",
      name: "Redflex Holdings Limited"
    },
    {
      symbol: "RDG.AX",
      name: "Resource Development Group Ltd"
    },
    {
      symbol: "RDH.AX",
      name: "RedHill Education Ltd"
    },
    {
      symbol: "RDM.AX",
      name: "Red Metal Limited"
    },
    {
      symbol: "RDN.AX",
      name: "Raiden Resources Ltd"
    },
    {
      symbol: "RDS.AX",
      name: "Redstone Resources Limited"
    },
    {
      symbol: "RDV.AX",
      name: "RUS DIV/ETF"
    },
    {
      symbol: "RDY.AX",
      name: "Readytech Holdings Ltd"
    },
    {
      symbol: "REA.AX",
      name: "REA Group Limited"
    },
    {
      symbol: "REC.AX",
      name: "N/A"
    },
    {
      symbol: "RED.AX",
      name: "Red 5 Limited"
    },
    {
      symbol: "REE.AX",
      name: "Rarex Ltd"
    },
    {
      symbol: "REF.AX",
      name: "Reverse Corp Limited"
    },
    {
      symbol: "REG.AX",
      name: "Regis Healthcare Ltd"
    },
    {
      symbol: "REH.AX",
      name: "Reece Ltd"
    },
    {
      symbol: "REIT.AX",
      name: "VE REIT/ETF"
    },
    {
      symbol: "REL.AX",
      name: "N/A"
    },
    {
      symbol: "RENT.AX",
      name: "AMPCAP PRO/FD"
    },
    {
      symbol: "RES.AX",
      name: "Resource Generation Ltd"
    },
    {
      symbol: "REV.AX",
      name: "Real Estate Investar Group Ltd"
    },
    {
      symbol: "REX.AX",
      name: "Regional Express Holdings Ltd"
    },
    {
      symbol: "REY.AX",
      name: "Rey Resources Limited"
    },
    {
      symbol: "REZ.AX",
      name: "Resources & Energy Group Ltd"
    },
    {
      symbol: "RF1.AX",
      name: "Regal Investment Fund"
    },
    {
      symbol: "RFF.AX",
      name: "Rural Funds Group"
    },
    {
      symbol: "RFG.AX",
      name: "Retail Food Group Limited"
    },
    {
      symbol: "RFL.AX",
      name: "N/A"
    },
    {
      symbol: "RFN.AX",
      name: "Reffind Ltd"
    },
    {
      symbol: "RFR.AX",
      name: "Rafaella Resources Ltd"
    },
    {
      symbol: "RFT.AX",
      name: "Rectifier Technologies Limited"
    },
    {
      symbol: "RFX.AX",
      name: "RedFlow Ltd"
    },
    {
      symbol: "RGB.AX",
      name: "RUSGOVBETF/ETF"
    },
    {
      symbol: "RGI.AX",
      name: "Roto-Gro International Ltd"
    },
    {
      symbol: "RGL.AX",
      name: "Riversgold Ltd"
    },
    {
      symbol: "RGP.AX",
      name: "N/A"
    },
    {
      symbol: "RGS.AX",
      name: "Regeneus Ltd"
    },
    {
      symbol: "RHC.AX",
      name: "Ramsay Health Care Limited Fully Paid Ord. Shrs"
    },
    {
      symbol: "RHI.AX",
      name: "Red Hill Iron Limited"
    },
    {
      symbol: "RHL.AX",
      name: "Ruralco Holdings Ltd"
    },
    {
      symbol: "RHP.AX",
      name: "Rhipe Ltd"
    },
    {
      symbol: "RHS.AX",
      name: "N/A"
    },
    {
      symbol: "RHT.AX",
      name: "Resonance Health Limited"
    },
    {
      symbol: "RHY.AX",
      name: "Rhythm Biosciences Ltd"
    },
    {
      symbol: "RIC.AX",
      name: "Ridley Corporation Ltd"
    },
    {
      symbol: "RIE.AX",
      name: "Riedel Resources Ltd"
    },
    {
      symbol: "RIG.AX",
      name: "N/A"
    },
    {
      symbol: "RIM.AX",
      name: "Rimfire Pacific Mining N L"
    },
    {
      symbol: "RIO.AX",
      name: "Rio Tinto Limited"
    },
    {
      symbol: "RIR.AX",
      name: "N/A"
    },
    {
      symbol: "RIS.AX",
      name: "N/A"
    },
    {
      symbol: "RKN.AX",
      name: "Reckon Limited"
    },
    {
      symbol: "RLC.AX",
      name: "Reedy Lagoon Corporation Ltd."
    },
    {
      symbol: "RLE.AX",
      name: "Real Energy Corporation Ltd"
    },
    {
      symbol: "RLG.AX",
      name: "Roolife Group Ltd"
    },
    {
      symbol: "RLT.AX",
      name: "RENERGEN/IDR UNRESTR"
    },
    {
      symbol: "RMC.AX",
      name: "Resimac Group Ltd"
    },
    {
      symbol: "RMD.AX",
      name: "RESMED/IDR UNRESTR"
    },
    {
      symbol: "RMG.AX",
      name: "RMG Limited"
    },
    {
      symbol: "RMI.AX",
      name: "Resource Mining Corporation Limited"
    },
    {
      symbol: "RML.AX",
      name: "Resolution Minerals Ltd"
    },
    {
      symbol: "RMP.AX",
      name: "Red Emperor Resources NL"
    },
    {
      symbol: "RMS.AX",
      name: "Ramelius Resources Limited"
    },
    {
      symbol: "RMT.AX",
      name: "RMA Energy Ltd."
    },
    {
      symbol: "RMX.AX",
      name: "Red Mountain Mining Ltd"
    },
    {
      symbol: "RMY.AX",
      name: "RMA Global Ltd"
    },
    {
      symbol: "RND.AX",
      name: "Rand Mining Ltd"
    },
    {
      symbol: "RNE.AX",
      name: "Renu Energy Ltd"
    },
    {
      symbol: "RNL.AX",
      name: "N/A"
    },
    {
      symbol: "RNO.AX",
      name: "Rhinomed Ltd"
    },
    {
      symbol: "RNS.AX",
      name: "N/A"
    },
    {
      symbol: "RNT.AX",
      name: "Rent.com.au Ltd"
    },
    {
      symbol: "RNU.AX",
      name: "Renascor Resources Ltd"
    },
    {
      symbol: "RNX.AX",
      name: "Renegade Exploration Ltd"
    },
    {
      symbol: "RNY.AX",
      name: "N/A"
    },
    {
      symbol: "ROBO.AX",
      name: "ETFS ROBO/ETF"
    },
    {
      symbol: "ROG.AX",
      name: "Red Sky Energy Limited"
    },
    {
      symbol: "ROO.AX",
      name: "Roots Sustainable Agricultural Techn Ltd"
    },
    {
      symbol: "RPG.AX",
      name: "Raptis Group Limited"
    },
    {
      symbol: "RPM.AX",
      name: "Rpm Automotive Group Ltd"
    },
    {
      symbol: "RQL.AX",
      name: "N/A"
    },
    {
      symbol: "RRL.AX",
      name: "Regis Resources Limited"
    },
    {
      symbol: "RRR.AX",
      name: "N/A"
    },
    {
      symbol: "RRS.AX",
      name: "N/A"
    },
    {
      symbol: "RSG.AX",
      name: "Resolute Mining Limited"
    },
    {
      symbol: "RSH.AX",
      name: "Respiri Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "RSM.AX",
      name: "RSMGOVBETF/ETF"
    },
    {
      symbol: "RTA.AX",
      name: "N/A"
    },
    {
      symbol: "RTE.AX",
      name: "Retech Technology Co Ltd"
    },
    {
      symbol: "RTG.AX",
      name: "RTG MINING/IDR UNRESTR"
    },
    {
      symbol: "RTR.AX",
      name: "Rumble Resources Ltd"
    },
    {
      symbol: "RUB.AX",
      name: "N/A"
    },
    {
      symbol: "RUL.AX",
      name: "RPMGlobal Holdings Ltd"
    },
    {
      symbol: "RVA.AX",
      name: "N/A"
    },
    {
      symbol: "RVR.AX",
      name: "Red River Resources Limited"
    },
    {
      symbol: "RVS.AX",
      name: "Revasum Inc"
    },
    {
      symbol: "RVY.AX",
      name: "N/A"
    },
    {
      symbol: "RWC.AX",
      name: "Reliance Worldwide Corporation Ltd"
    },
    {
      symbol: "RWD.AX",
      name: "Reward Minerals Ltd."
    },
    {
      symbol: "RWH.AX",
      name: "N/A"
    },
    {
      symbol: "RXH.AX",
      name: "Rewardle Holdings Ltd"
    },
    {
      symbol: "RXL.AX",
      name: "Rox Resources Limited"
    },
    {
      symbol: "RXM.AX",
      name: "Rex Minerals Limited"
    },
    {
      symbol: "RXP.AX",
      name: "RXP Services Ltd"
    },
    {
      symbol: "RYD.AX",
      name: "Ryder Capital Ltd"
    },
    {
      symbol: "RZI.AX",
      name: "RAIZ Invest Ltd"
    },
    {
      symbol: "S2R.AX",
      name: "S2 Resources Ltd"
    },
    {
      symbol: "S32.AX",
      name: "South32 Ltd"
    },
    {
      symbol: "S3R.AX",
      name: "N/A"
    },
    {
      symbol: "S66.AX",
      name: "Star Combo Pharma Ltd"
    },
    {
      symbol: "SAI.AX",
      name: "N/A"
    },
    {
      symbol: "SAM.AX",
      name: "N/A"
    },
    {
      symbol: "SAN.AX",
      name: "Sagalio Energy Ltd"
    },
    {
      symbol: "SAO.AX",
      name: "N/A"
    },
    {
      symbol: "SAP.AX",
      name: "N/A"
    },
    {
      symbol: "SAR.AX",
      name: "Saracen Mineral Holdings Limited"
    },
    {
      symbol: "SAS.AX",
      name: "N/A"
    },
    {
      symbol: "SAU.AX",
      name: "Southern Gold Limited"
    },
    {
      symbol: "SAY.AX",
      name: "N/A"
    },
    {
      symbol: "SBB.AX",
      name: "N/A"
    },
    {
      symbol: "SBI.AX",
      name: "N/A"
    },
    {
      symbol: "SBM.AX",
      name: "St Barbara Ltd"
    },
    {
      symbol: "SBR.AX",
      name: "Sabre Resources Limited"
    },
    {
      symbol: "SBU.AX",
      name: "N/A"
    },
    {
      symbol: "SBW.AX",
      name: "Shekel Brainweight Ltd"
    },
    {
      symbol: "SCD.AX",
      name: "N/A"
    },
    {
      symbol: "SCG.AX",
      name: "Scentre Group"
    },
    {
      symbol: "SCI.AX",
      name: "Silver City Minerals Ltd"
    },
    {
      symbol: "SCL.AX",
      name: "Schrole Group Ltd"
    },
    {
      symbol: "SCN.AX",
      name: "Scorpion Minerals Ltd"
    },
    {
      symbol: "SCO.AX",
      name: "N/A"
    },
    {
      symbol: "SCP.AX",
      name: "Shopping Cntrs Austrls Prprty Gp Re Ltd"
    },
    {
      symbol: "SCT.AX",
      name: "Scout Security Ltd"
    },
    {
      symbol: "SCU.AX",
      name: "Stemcell United Ltd"
    },
    {
      symbol: "SDA.AX",
      name: "Speedcast International Ltd"
    },
    {
      symbol: "SDF.AX",
      name: "Steadfast Group Ltd"
    },
    {
      symbol: "SDG.AX",
      name: "Sunland Group Limited"
    },
    {
      symbol: "SDI.AX",
      name: "SDI Limited"
    },
    {
      symbol: "SDL.AX",
      name: "N/A"
    },
    {
      symbol: "SDM.AX",
      name: "N/A"
    },
    {
      symbol: "SDV.AX",
      name: "Scidev Ltd"
    },
    {
      symbol: "SDX.AX",
      name: "Sienna Cancer Diagnostics Ltd"
    },
    {
      symbol: "SE1.AX",
      name: "Sensera Ltd"
    },
    {
      symbol: "SEA.AX",
      name: "Sundance Energy Australia Ltd"
    },
    {
      symbol: "SEC.AX",
      name: "Spheria Emerging Companies Ltd"
    },
    {
      symbol: "SEH.AX",
      name: "N/A"
    },
    {
      symbol: "SEI.AX",
      name: "Speciality Metals International Ltd"
    },
    {
      symbol: "SEK.AX",
      name: "SEEK Limited"
    },
    {
      symbol: "SEN.AX",
      name: "Senetas Corporation Limited"
    },
    {
      symbol: "SEQ.AX",
      name: "Sequoia Financial Group Ltd"
    },
    {
      symbol: "SER.AX",
      name: "Strategic Energy Resources Limited"
    },
    {
      symbol: "SES.AX",
      name: "Secos Group Ltd"
    },
    {
      symbol: "SF1.AX",
      name: "Stemify Ltd"
    },
    {
      symbol: "SFC.AX",
      name: "Schaffer Corporation Limited"
    },
    {
      symbol: "SFG.AX",
      name: "Seafarms Group Ltd"
    },
    {
      symbol: "SFH.AX",
      name: "N/A"
    },
    {
      symbol: "SFI.AX",
      name: "N/A"
    },
    {
      symbol: "SFL.AX",
      name: "Spring FG Ltd"
    },
    {
      symbol: "SFM.AX",
      name: "Santa Fe Minerals Ltd"
    },
    {
      symbol: "SFR.AX",
      name: "Sandfire Resources Ltd"
    },
    {
      symbol: "SFX.AX",
      name: "Sheffield Resources Ltd"
    },
    {
      symbol: "SFY.AX",
      name: "SPDR S&P/ASX 50 Fund"
    },
    {
      symbol: "SGC.AX",
      name: "Sacgasco Ltd"
    },
    {
      symbol: "SGF.AX",
      name: "SG Fleet Group Ltd"
    },
    {
      symbol: "SGH.AX",
      name: "Slater & Gordon Limited"
    },
    {
      symbol: "SGI.AX",
      name: "Stealth Global Holdings Ltd"
    },
    {
      symbol: "SGM.AX",
      name: "Sims Ltd"
    },
    {
      symbol: "SGO.AX",
      name: "Stream Group Ltd"
    },
    {
      symbol: "SGP.AX",
      name: "Stockland Corporation Ltd"
    },
    {
      symbol: "SGQ.AX",
      name: "St George Mining Ltd"
    },
    {
      symbol: "SGR.AX",
      name: "Star Entertainment Group Ltd"
    },
    {
      symbol: "SGT.AX",
      name: "N/A"
    },
    {
      symbol: "SGU.AX",
      name: "N/A"
    },
    {
      symbol: "SGZ.AX",
      name: "N/A"
    },
    {
      symbol: "SHE.AX",
      name: "Stonehorse Energy Ltd"
    },
    {
      symbol: "SHH.AX",
      name: "Shree Minerals Limited"
    },
    {
      symbol: "SHJ.AX",
      name: "Shine Corporate Ltd"
    },
    {
      symbol: "SHK.AX",
      name: "Stone Resources Australia Ltd"
    },
    {
      symbol: "SHL.AX",
      name: "Sonic Healthcare Limited"
    },
    {
      symbol: "SHM.AX",
      name: "Shriro Holdings Ltd"
    },
    {
      symbol: "SHO.AX",
      name: "SportsHero Ltd"
    },
    {
      symbol: "SHR.AX",
      name: "N/A"
    },
    {
      symbol: "SHU.AX",
      name: "N/A"
    },
    {
      symbol: "SHV.AX",
      name: "Select Harvests Limited"
    },
    {
      symbol: "SI6.AX",
      name: "Six Sigma Metals Ltd"
    },
    {
      symbol: "SIE.AX",
      name: "N/A"
    },
    {
      symbol: "SIG.AX",
      name: "Sigma Healthcare Ltd"
    },
    {
      symbol: "SIH.AX",
      name: "Sihayo Gold Limited"
    },
    {
      symbol: "SIL.AX",
      name: "Smiles Inclusive Ltd"
    },
    {
      symbol: "SIO.AX",
      name: "Simonds Group Ltd"
    },
    {
      symbol: "SIQ.AX",
      name: "Smartgroup Corporation Ltd"
    },
    {
      symbol: "SIR.AX",
      name: "N/A"
    },
    {
      symbol: "SIS.AX",
      name: "Simble Solutions Ltd"
    },
    {
      symbol: "SIT.AX",
      name: "Site Group International Ltd"
    },
    {
      symbol: "SIV.AX",
      name: "Siv Capital Ltd"
    },
    {
      symbol: "SIX.AX",
      name: "N/A"
    },
    {
      symbol: "SKC.AX",
      name: "SKYCITY Entertainment Group Limited"
    },
    {
      symbol: "SKE.AX",
      name: "N/A"
    },
    {
      symbol: "SKF.AX",
      name: "Skyfii Ltd"
    },
    {
      symbol: "SKI.AX",
      name: "Spark Infrastructure Group"
    },
    {
      symbol: "SKN.AX",
      name: "Skin Elements Ltd"
    },
    {
      symbol: "SKO.AX",
      name: "Serko Ltd"
    },
    {
      symbol: "SKP.AX",
      name: "Skyland Petroleum Pty Ltd"
    },
    {
      symbol: "SKS.AX",
      name: "N/A"
    },
    {
      symbol: "SKT.AX",
      name: "SKY Network Television Limited"
    },
    {
      symbol: "SKY.AX",
      name: "Sky Metals Ltd"
    },
    {
      symbol: "SL1.AX",
      name: "N/A"
    },
    {
      symbol: "SLA.AX",
      name: "N/A"
    },
    {
      symbol: "SLC.AX",
      name: "Superloop Ltd"
    },
    {
      symbol: "SLE.AX",
      name: "N/A"
    },
    {
      symbol: "SLF.AX",
      name: "SPDR S&P/ASX 200 Listed Property Fund"
    },
    {
      symbol: "SLK.AX",
      name: "Sealink Travel Group Ltd"
    },
    {
      symbol: "SLM.AX",
      name: "Salmat Limited"
    },
    {
      symbol: "SLR.AX",
      name: "Silver Lake Resources Limited."
    },
    {
      symbol: "SLX.AX",
      name: "Silex Systems Ltd"
    },
    {
      symbol: "SLZ.AX",
      name: "Sultan Resources Ltd"
    },
    {
      symbol: "SM1.AX",
      name: "Synlait Milk Ltd"
    },
    {
      symbol: "SM8.AX",
      name: "Smart Marine Systems Ltd"
    },
    {
      symbol: "SMA.AX",
      name: "N/A"
    },
    {
      symbol: "SMC.AX",
      name: "Strategic Minerals Corporation NL"
    },
    {
      symbol: "SMD.AX",
      name: "Syndicated Metals Limited."
    },
    {
      symbol: "SMG.AX",
      name: "Soon Mining Ltd"
    },
    {
      symbol: "SMI.AX",
      name: "Santana Minerals Ltd"
    },
    {
      symbol: "SMM.AX",
      name: "N/A"
    },
    {
      symbol: "SMN.AX",
      name: "Structural Monitoring Systems plc"
    },
    {
      symbol: "SMP.AX",
      name: "Smartpay Holdings Ltd"
    },
    {
      symbol: "SMR.AX",
      name: "Stanmore Coal Limited"
    },
    {
      symbol: "SMX.AX",
      name: "Security Matters Ltd"
    },
    {
      symbol: "SNC.AX",
      name: "Sandon Capital Investments Ltd"
    },
    {
      symbol: "SND.AX",
      name: "Saunders International Ltd"
    },
    {
      symbol: "SNL.AX",
      name: "Supply Network Limited"
    },
    {
      symbol: "SNR.AX",
      name: "N/A"
    },
    {
      symbol: "SNS.AX",
      name: "Sensen Networks Ltd"
    },
    {
      symbol: "SNV.AX",
      name: "N/A"
    },
    {
      symbol: "SNZ.AX",
      name: "Summerset Group Holdings Ltd"
    },
    {
      symbol: "SO4.AX",
      name: "Salt Lake Potash Ltd"
    },
    {
      symbol: "SOL.AX",
      name: "Washington H. Soul Pattinson and Co. Ltd"
    },
    {
      symbol: "SOM.AX",
      name: "Somnomed Limited"
    },
    {
      symbol: "SOP.AX",
      name: "SML Corporation Ltd"
    },
    {
      symbol: "SOR.AX",
      name: "Strategic Elements Ltd"
    },
    {
      symbol: "SP1.AX",
      name: "N/A"
    },
    {
      symbol: "SP3.AX",
      name: "Spectur Ltd"
    },
    {
      symbol: "SPB.AX",
      name: "South Pacific Resources Ltd"
    },
    {
      symbol: "SPH.AX",
      name: "N/A"
    },
    {
      symbol: "SPI.AX",
      name: "N/A"
    },
    {
      symbol: "SPK.AX",
      name: "Spark New Zealand Ltd"
    },
    {
      symbol: "SPL.AX",
      name: "Starpharma Holdings Limited"
    },
    {
      symbol: "SPO.AX",
      name: "Spotless Group Holdings Ltd"
    },
    {
      symbol: "SPQ.AX",
      name: "Superior Resources Limited."
    },
    {
      symbol: "SPT.AX",
      name: "Splitit Ltd"
    },
    {
      symbol: "SPX.AX",
      name: "Spectrum Metals Ltd"
    },
    {
      symbol: "SPZ.AX",
      name: "Smart Parking Ltd"
    },
    {
      symbol: "SRF.AX",
      name: "N/A"
    },
    {
      symbol: "SRG.AX",
      name: "SRG Global Ltd"
    },
    {
      symbol: "SRH.AX",
      name: "Saferoads Holdings Limited"
    },
    {
      symbol: "SRI.AX",
      name: "Sipa Resources Limited"
    },
    {
      symbol: "SRK.AX",
      name: "Strike Resources Limited"
    },
    {
      symbol: "SRN.AX",
      name: "Surefire Resources NL"
    },
    {
      symbol: "SRO.AX",
      name: "Shareroot Ltd"
    },
    {
      symbol: "SRR.AX",
      name: "N/A"
    },
    {
      symbol: "SRS.AX",
      name: "Spicers Ltd"
    },
    {
      symbol: "SRV.AX",
      name: "Servcorp Limited"
    },
    {
      symbol: "SRX.AX",
      name: "N/A"
    },
    {
      symbol: "SRY.AX",
      name: "Story-I Ltd"
    },
    {
      symbol: "SRZ.AX",
      name: "Stellar Resources Ltd."
    },
    {
      symbol: "SSG.AX",
      name: "Shaver Shop Group Ltd"
    },
    {
      symbol: "SSI.AX",
      name: "N/A"
    },
    {
      symbol: "SSL.AX",
      name: "Sietel Limited Fully Paid Ord. Shrs"
    },
    {
      symbol: "SSLPA.AX",
      name: "N/A"
    },
    {
      symbol: "SSM.AX",
      name: "Service Stream Limited"
    },
    {
      symbol: "SSN.AX",
      name: "Samson Oil & Gas Ltd"
    },
    {
      symbol: "SST.AX",
      name: "Steamships Trading Company Limited"
    },
    {
      symbol: "ST1.AX",
      name: "Spirit Telecom Ltd"
    },
    {
      symbol: "STA.AX",
      name: "Strandline Resources Ltd"
    },
    {
      symbol: "STG.AX",
      name: "Straker Translations Ltd"
    },
    {
      symbol: "STI.AX",
      name: "N/A"
    },
    {
      symbol: "STL.AX",
      name: "Stargroup Ltd"
    },
    {
      symbol: "STM.AX",
      name: "Sunstone Metals Ltd"
    },
    {
      symbol: "STN.AX",
      name: "Saturn Metals Ltd"
    },
    {
      symbol: "STO.AX",
      name: "Santos Ltd"
    },
    {
      symbol: "STW.AX",
      name: "SPDR S&P/ASX 200 Fund"
    },
    {
      symbol: "STX.AX",
      name: "Strike Energy Ltd"
    },
    {
      symbol: "SUD.AX",
      name: "Suda Pharmaceuticals Ltd"
    },
    {
      symbol: "SUH.AX",
      name: "Southern Hemisphere Mining Ltd"
    },
    {
      symbol: "SUL.AX",
      name: "Super Retail Group Ltd"
    },
    {
      symbol: "SUM.AX",
      name: "N/A"
    },
    {
      symbol: "SUN.AX",
      name: "Suncorp Group Ltd"
    },
    {
      symbol: "SUP.AX",
      name: "Superior Lake Resources Ltd"
    },
    {
      symbol: "SUR.AX",
      name: "Sun Resources NL"
    },
    {
      symbol: "SVA.AX",
      name: "Simavita Ltd"
    },
    {
      symbol: "SVD.AX",
      name: "Scandivanadium Ltd"
    },
    {
      symbol: "SVH.AX",
      name: "N/A"
    },
    {
      symbol: "SVL.AX",
      name: "Silver Mines Limited"
    },
    {
      symbol: "SVM.AX",
      name: "Sovereign Metals Limited"
    },
    {
      symbol: "SVS.AX",
      name: "Sunvest Corporation Limited"
    },
    {
      symbol: "SVT.AX",
      name: "Servtech Global Holdings Ltd"
    },
    {
      symbol: "SVW.AX",
      name: "Seven Group Holdings Ltd"
    },
    {
      symbol: "SVY.AX",
      name: "Stavely Minerals Ltd"
    },
    {
      symbol: "SW1.AX",
      name: "Swift Media Ltd"
    },
    {
      symbol: "SWF.AX",
      name: "Selfwealth Ltd"
    },
    {
      symbol: "SWJ.AX",
      name: "N/A"
    },
    {
      symbol: "SWK.AX",
      name: "Swick Mining Services Ltd"
    },
    {
      symbol: "SWL.AX",
      name: "N/A"
    },
    {
      symbol: "SWM.AX",
      name: "Seven West Media Ltd"
    },
    {
      symbol: "SWTZ.AX",
      name: "SWTZDIVGRO/FD"
    },
    {
      symbol: "SXA.AX",
      name: "STRATA-X/IDR UNRESTR"
    },
    {
      symbol: "SXE.AX",
      name: "Southern Cross Electrical Engineer Ltd"
    },
    {
      symbol: "SXL.AX",
      name: "Southern Cross Media Group Ltd"
    },
    {
      symbol: "SXS.AX",
      name: "N/A"
    },
    {
      symbol: "SXX.AX",
      name: "N/A"
    },
    {
      symbol: "SXY.AX",
      name: "Senex Energy Ltd"
    },
    {
      symbol: "SYA.AX",
      name: "Sayona Mining Ltd"
    },
    {
      symbol: "SYD.AX",
      name: "Sydney Airport Holdings Pty Ltd"
    },
    {
      symbol: "SYI.AX",
      name: "SPDRMSCIDY/ETF"
    },
    {
      symbol: "SYR.AX",
      name: "Syrah Resources Ltd"
    },
    {
      symbol: "SYS.AX",
      name: "Syngas Ltd"
    },
    {
      symbol: "SYT.AX",
      name: "Syntonic Ltd"
    },
    {
      symbol: "SZL.AX",
      name: "Sezzle Inc"
    },
    {
      symbol: "T3D.AX",
      name: "333D Ltd"
    },
    {
      symbol: "TA8.AX",
      name: "N/A"
    },
    {
      symbol: "TAG.AX",
      name: "N/A"
    },
    {
      symbol: "TAH.AX",
      name: "Tabcorp Holdings Limited"
    },
    {
      symbol: "TAM.AX",
      name: "Tanami Gold NL"
    },
    {
      symbol: "TAN.AX",
      name: "N/A"
    },
    {
      symbol: "TAO.AX",
      name: "Tao Commodities Ltd"
    },
    {
      symbol: "TAP.AX",
      name: "Tap Oil Limited"
    },
    {
      symbol: "TAR.AX",
      name: "Taruga Minerals Ltd"
    },
    {
      symbol: "TAS.AX",
      name: "Tasman Resources Ltd"
    },
    {
      symbol: "TAU.AX",
      name: "N/A"
    },
    {
      symbol: "TAW.AX",
      name: "N/A"
    },
    {
      symbol: "TB8.AX",
      name: "N/A"
    },
    {
      symbol: "TBH.AX",
      name: "Betmakers Holdings Ltd"
    },
    {
      symbol: "TBL.AX",
      name: "Tambla Ltd"
    },
    {
      symbol: "TBR.AX",
      name: "Tribune Resources Ltd"
    },
    {
      symbol: "TCH.AX",
      name: "N/A"
    },
    {
      symbol: "TCL.AX",
      name: "Transurban Group"
    },
    {
      symbol: "TCN.AX",
      name: "Techniche Limited"
    },
    {
      symbol: "TCO.AX",
      name: "Transmetro Corporation Limited"
    },
    {
      symbol: "TDI.AX",
      name: "360 Capital Digital Infrastructure Fund"
    },
    {
      symbol: "TDL.AX",
      name: "TBG Diagnostics Ltd"
    },
    {
      symbol: "TDO.AX",
      name: "3D Oil Limited"
    },
    {
      symbol: "TEG.AX",
      name: "Triangle Energy (Global) Ltd"
    },
    {
      symbol: "TEK.AX",
      name: "Thorney Technologies Ltd"
    },
    {
      symbol: "TEN.AX",
      name: "N/A"
    },
    {
      symbol: "TER.AX",
      name: "Terracom Ltd"
    },
    {
      symbol: "TEX.AX",
      name: "Target Energy Limited"
    },
    {
      symbol: "TFG.AX",
      name: "N/A"
    },
    {
      symbol: "TFL.AX",
      name: "Tasfoods Ltd"
    },
    {
      symbol: "TGA.AX",
      name: "Thorn Group Ltd"
    },
    {
      symbol: "TGF.AX",
      name: "Tribeca Global Natural Resources Ltd"
    },
    {
      symbol: "TGG.AX",
      name: "Templeton Global Growth Fund Ltd"
    },
    {
      symbol: "TGH.AX",
      name: "Terragen Holdings Ltd"
    },
    {
      symbol: "TGM.AX",
      name: "Theta Gold Mines Ltd"
    },
    {
      symbol: "TGN.AX",
      name: "Tungsten Mining NL"
    },
    {
      symbol: "TGO.AX",
      name: "Trimantium Growthops Ltd"
    },
    {
      symbol: "TGP.AX",
      name: "360 Capital Group Ltd"
    },
    {
      symbol: "TGR.AX",
      name: "Tassal Group Limited"
    },
    {
      symbol: "TGS.AX",
      name: "N/A"
    },
    {
      symbol: "TGZ.AX",
      name: "N/A"
    },
    {
      symbol: "THC.AX",
      name: "Thc Global Group Ltd"
    },
    {
      symbol: "THD.AX",
      name: "Thred Ltd"
    },
    {
      symbol: "THO.AX",
      name: "N/A"
    },
    {
      symbol: "THR.AX",
      name: "Thor Mining Plc"
    },
    {
      symbol: "THX.AX",
      name: "N/A"
    },
    {
      symbol: "TIA.AX",
      name: "Tian AN Australia Ltd"
    },
    {
      symbol: "TIE.AX",
      name: "Tietto Minerals Ltd"
    },
    {
      symbol: "TIG.AX",
      name: "Tigers Realm Coal Ltd"
    },
    {
      symbol: "TIN.AX",
      name: "TNT Mines Ltd"
    },
    {
      symbol: "TIP.AX",
      name: "Teaminvest Private Group Ltd"
    },
    {
      symbol: "TKF.AX",
      name: "N/A"
    },
    {
      symbol: "TKL.AX",
      name: "Traka Resources Ltd"
    },
    {
      symbol: "TKM.AX",
      name: "Trek Metals Ltd"
    },
    {
      symbol: "TLG.AX",
      name: "Talga Resources Ltd"
    },
    {
      symbol: "TLM.AX",
      name: "Talisman Mining Ltd."
    },
    {
      symbol: "TLS.AX",
      name: "Telstra Corporation Ltd"
    },
    {
      symbol: "TLT.AX",
      name: "Tilt Renewables Ltd"
    },
    {
      symbol: "TLX.AX",
      name: "Telix Pharmaceuticals Ltd"
    },
    {
      symbol: "TME.AX",
      name: "N/A"
    },
    {
      symbol: "TMG.AX",
      name: "Trigg Mining Ltd"
    },
    {
      symbol: "TMK.AX",
      name: "Tamaska Oil and Gas Ltd"
    },
    {
      symbol: "TML.AX",
      name: "Timah Resources Ltd"
    },
    {
      symbol: "TMM.AX",
      name: "N/A"
    },
    {
      symbol: "TMP.AX",
      name: "N/A"
    },
    {
      symbol: "TMR.AX",
      name: "Tempus Resources Ltd"
    },
    {
      symbol: "TMT.AX",
      name: "Technology Metals Australia Ltd"
    },
    {
      symbol: "TMX.AX",
      name: "Terrain Minerals Ltd"
    },
    {
      symbol: "TMZ.AX",
      name: "Thomson Resources Ltd"
    },
    {
      symbol: "TNE.AX",
      name: "Technology One Limited"
    },
    {
      symbol: "TNG.AX",
      name: "TNG Limited"
    },
    {
      symbol: "TNK.AX",
      name: "Think Childcare Ltd"
    },
    {
      symbol: "TNO.AX",
      name: "N/A"
    },
    {
      symbol: "TNP.AX",
      name: "Triple Energy Ltd"
    },
    {
      symbol: "TNR.AX",
      name: "Torian Resources Ltd"
    },
    {
      symbol: "TNT.AX",
      name: "Tesserent Ltd"
    },
    {
      symbol: "TNY.AX",
      name: "Tinybeans Group Ltd"
    },
    {
      symbol: "TO2.AX",
      name: "N/A"
    },
    {
      symbol: "TOE.AX",
      name: "Toro Energy Limited"
    },
    {
      symbol: "TOL.AX",
      name: "N/A"
    },
    {
      symbol: "TOM.AX",
      name: "N/A"
    },
    {
      symbol: "TON.AX",
      name: "Triton Minerals Ltd"
    },
    {
      symbol: "TOP.AX",
      name: "Thorney Opportunities Ltd"
    },
    {
      symbol: "TOT.AX",
      name: "360 Capital Total Return Fund"
    },
    {
      symbol: "TOU.AX",
      name: "TLOU Energy Ltd"
    },
    {
      symbol: "TOX.AX",
      name: "N/A"
    },
    {
      symbol: "TPC.AX",
      name: "TPC Consolidated Ltd"
    },
    {
      symbol: "TPD.AX",
      name: "Talon Petroleum Ltd"
    },
    {
      symbol: "TPE.AX",
      name: "N/A"
    },
    {
      symbol: "TPM.AX",
      name: "TPG Telecom Ltd"
    },
    {
      symbol: "TPO.AX",
      name: "N/A"
    },
    {
      symbol: "TPP.AX",
      name: "Tempo Australia Ltd"
    },
    {
      symbol: "TPS.AX",
      name: "Threat Protect Australia Ltd"
    },
    {
      symbol: "TPW.AX",
      name: "Temple & Webster Group Ltd"
    },
    {
      symbol: "TRA.AX",
      name: "Turners Automotive Group Ltd"
    },
    {
      symbol: "TRF.AX",
      name: "N/A"
    },
    {
      symbol: "TRL.AX",
      name: "Tanga Resources Ltd"
    },
    {
      symbol: "TRM.AX",
      name: "Truscott Mining Corporation Limited"
    },
    {
      symbol: "TRS.AX",
      name: "Reject Shop Ltd"
    },
    {
      symbol: "TRT.AX",
      name: "Todd River Resources Ltd"
    },
    {
      symbol: "TRY.AX",
      name: "Troy Resources Ltd"
    },
    {
      symbol: "TSC.AX",
      name: "Twenty Seven Co Ltd"
    },
    {
      symbol: "TSL.AX",
      name: "Titanium Sands Ltd"
    },
    {
      symbol: "TSM.AX",
      name: "N/A"
    },
    {
      symbol: "TSN.AX",
      name: "Transaction Solutions International Ltd"
    },
    {
      symbol: "TTA.AX",
      name: "TTA Holdings Limited"
    },
    {
      symbol: "TTB.AX",
      name: "Total Brain Ltd"
    },
    {
      symbol: "TTC.AX",
      name: "N/A"
    },
    {
      symbol: "TTI.AX",
      name: "Traffic Technologies Limited"
    },
    {
      symbol: "TTL.AX",
      name: "Transcendence Technologies Ltd"
    },
    {
      symbol: "TTM.AX",
      name: "Titan Minerals Ltd"
    },
    {
      symbol: "TTS.AX",
      name: "N/A"
    },
    {
      symbol: "TTT.AX",
      name: "Titomic Ltd"
    },
    {
      symbol: "TTW.AX",
      name: "N/A"
    },
    {
      symbol: "TUP.AX",
      name: "N/A"
    },
    {
      symbol: "TV2.AX",
      name: "TV2U International Ltd"
    },
    {
      symbol: "TWD.AX",
      name: "Tamawood Limited"
    },
    {
      symbol: "TWE.AX",
      name: "Treasury Wine Estates Ltd"
    },
    {
      symbol: "TWR.AX",
      name: "TOWER Limited"
    },
    {
      symbol: "TWT.AX",
      name: "N/A"
    },
    {
      symbol: "TYK.AX",
      name: "N/A"
    },
    {
      symbol: "TYM.AX",
      name: "Tymlez Group Ltd"
    },
    {
      symbol: "TYO.AX",
      name: "N/A"
    },
    {
      symbol: "TYR.AX",
      name: "Tyro Payments Ltd"
    },
    {
      symbol: "TYX.AX",
      name: "Tyranna Resources Ltd"
    },
    {
      symbol: "TZL.AX",
      name: "TZ Limited"
    },
    {
      symbol: "TZN.AX",
      name: "Terramin Australia Limited"
    },
    {
      symbol: "UBE.AX",
      name: "UBS IQ EU/ETF"
    },
    {
      symbol: "UBI.AX",
      name: "Universal Biosensors, Inc."
    },
    {
      symbol: "UBJ.AX",
      name: "UBS IQ JAP/ETF"
    },
    {
      symbol: "UBN.AX",
      name: "Urbanise.com Ltd"
    },
    {
      symbol: "UBU.AX",
      name: "UBS IQ USA/ETF"
    },
    {
      symbol: "UBW.AX",
      name: "UBS IQ WOR/ETF"
    },
    {
      symbol: "UCM.AX",
      name: "Uscom Ltd"
    },
    {
      symbol: "UCW.AX",
      name: "UCW Ltd"
    },
    {
      symbol: "UGL.AX",
      name: "N/A"
    },
    {
      symbol: "UIL.AX",
      name: "N/A"
    },
    {
      symbol: "UML.AX",
      name: "N/A"
    },
    {
      symbol: "UND.AX",
      name: "N/A"
    },
    {
      symbol: "UNL.AX",
      name: "United Networks Ltd"
    },
    {
      symbol: "UNS.AX",
      name: "N/A"
    },
    {
      symbol: "UNV.AX",
      name: "Universal Coal Plc"
    },
    {
      symbol: "UOS.AX",
      name: "United Overseas Australia Limited"
    },
    {
      symbol: "UPD.AX",
      name: "N/A"
    },
    {
      symbol: "UPG.AX",
      name: "N/A"
    },
    {
      symbol: "URB.AX",
      name: "N/A"
    },
    {
      symbol: "URF.AX",
      name: "US Masters Residential Property Fund Unit"
    },
    {
      symbol: "URW.AX",
      name: "UNIBALWEST/IDR UNRESTR"
    },
    {
      symbol: "USA.AX",
      name: "N/A"
    },
    {
      symbol: "USD.AX",
      name: "BETASH USD/ETF"
    },
    {
      symbol: "USR.AX",
      name: "N/A"
    },
    {
      symbol: "UTR.AX",
      name: "Ultracharge Ltd"
    },
    {
      symbol: "UUL.AX",
      name: "Ultima United Ltd"
    },
    {
      symbol: "UUV.AX",
      name: "UUV Aquabotix Ltd"
    },
    {
      symbol: "UWL.AX",
      name: "Uniti Group Ltd"
    },
    {
      symbol: "UXA.AX",
      name: "N/A"
    },
    {
      symbol: "UXC.AX",
      name: "N/A"
    },
    {
      symbol: "VACF.AX",
      name: "VAN ACFIIE/ETF"
    },
    {
      symbol: "VAE.AX",
      name: "VGDFTSEASA/ETF"
    },
    {
      symbol: "VAF.AX",
      name: "VAUSFI/ETF"
    },
    {
      symbol: "VAH.AX",
      name: "Virgin Australia Holdings Ltd"
    },
    {
      symbol: "VAL.AX",
      name: "Valor Resources Ltd"
    },
    {
      symbol: "VAN.AX",
      name: "Vango Mining Ltd"
    },
    {
      symbol: "VAP.AX",
      name: "V300APROP/ETF"
    },
    {
      symbol: "VAR.AX",
      name: "Variscan Mines Ltd"
    },
    {
      symbol: "VAS.AX",
      name: "V300AEQ/ETF"
    },
    {
      symbol: "VBLD.AX",
      name: "VDGLBINFRA/ETF"
    },
    {
      symbol: "VBND.AX",
      name: "VGLAGGBNDH/ETF"
    },
    {
      symbol: "VBS.AX",
      name: "Vectus Biosystems Ltd"
    },
    {
      symbol: "VCF.AX",
      name: "VDINTCRDSC/ETF"
    },
    {
      symbol: "VCX.AX",
      name: "Vicinity Centres"
    },
    {
      symbol: "VDBA.AX",
      name: "VDBALANCE/ETF"
    },
    {
      symbol: "VDCO.AX",
      name: "VDCONSERV/ETF"
    },
    {
      symbol: "VDGR.AX",
      name: "VDGROWTH/ETF"
    },
    {
      symbol: "VDHG.AX",
      name: "VDHIGHGROW/ETF"
    },
    {
      symbol: "VEA.AX",
      name: "Viva Energy Group Ltd"
    },
    {
      symbol: "VEC.AX",
      name: "N/A"
    },
    {
      symbol: "VED.AX",
      name: "N/A"
    },
    {
      symbol: "VEE.AX",
      name: "VEEM Ltd"
    },
    {
      symbol: "VEI.AX",
      name: "N/A"
    },
    {
      symbol: "VELCP.AX",
      name: "N/A"
    },
    {
      symbol: "VELIN.AX",
      name: "N/A"
    },
    {
      symbol: "VELPA.AX",
      name: "N/A"
    },
    {
      symbol: "VEN.AX",
      name: "Vintage Energy Ltd"
    },
    {
      symbol: "VEQ.AX",
      name: "VGDFTSEEUR/ETF"
    },
    {
      symbol: "VESG.AX",
      name: "VDETHISHS/ETF"
    },
    {
      symbol: "VET.AX",
      name: "N/A"
    },
    {
      symbol: "VEU.AX",
      name: "VWORLDXUS/ETF"
    },
    {
      symbol: "VG1.AX",
      name: "VGI Partners Global Investments Ltd"
    },
    {
      symbol: "VG8.AX",
      name: "VGI Partners Asian Investments Ltd"
    },
    {
      symbol: "VGAD.AX",
      name: "VINTLH/ETF"
    },
    {
      symbol: "VGB.AX",
      name: "VGOVBOND/ETF"
    },
    {
      symbol: "VGE.AX",
      name: "VEMMKTS/ETF"
    },
    {
      symbol: "VGI.AX",
      name: "Vgi Partners Ltd"
    },
    {
      symbol: "VGL.AX",
      name: "Vista Group International Ltd"
    },
    {
      symbol: "VGS.AX",
      name: "VINTL/ETF"
    },
    {
      symbol: "VHT.AX",
      name: "Volpara Health Technologies Ltd"
    },
    {
      symbol: "VHY.AX",
      name: "VHIGHYIELD/ETF"
    },
    {
      symbol: "VIA.AX",
      name: "ViaGOLD Capital Limited"
    },
    {
      symbol: "VIC.AX",
      name: "Victory Mines Ltd"
    },
    {
      symbol: "VIE.AX",
      name: "N/A"
    },
    {
      symbol: "VIF.AX",
      name: "VDITLFXINT/ETF"
    },
    {
      symbol: "VIG.AX",
      name: "Victor Group Holdings Ltd"
    },
    {
      symbol: "VII.AX",
      name: "N/A"
    },
    {
      symbol: "VIP.AX",
      name: "VIP Gloves Ltd"
    },
    {
      symbol: "VISM.AX",
      name: "VDSMALLCAP/ETF"
    },
    {
      symbol: "VIT.AX",
      name: "N/A"
    },
    {
      symbol: "VIV.AX",
      name: "N/A"
    },
    {
      symbol: "VKA.AX",
      name: "Viking Mines Ltd"
    },
    {
      symbol: "VLA.AX",
      name: "N/A"
    },
    {
      symbol: "VLC.AX",
      name: "VLARGECO/ETF"
    },
    {
      symbol: "VLS.AX",
      name: "Vita Life Sciences Limited"
    },
    {
      symbol: "VLT.AX",
      name: "Vault Intelligence Ltd"
    },
    {
      symbol: "VLW.AX",
      name: "N/A"
    },
    {
      symbol: "VMC.AX",
      name: "Venus Metals Corporation Limited"
    },
    {
      symbol: "VMG.AX",
      name: "VDM Group Ltd"
    },
    {
      symbol: "VML.AX",
      name: "Vital Metals Limited"
    },
    {
      symbol: "VMS.AX",
      name: "Venture Minerals Limited"
    },
    {
      symbol: "VMT.AX",
      name: "Vmoto Ltd"
    },
    {
      symbol: "VMX.AX",
      name: "Valmec Ltd"
    },
    {
      symbol: "VMY.AX",
      name: "Vimy Resources Ltd"
    },
    {
      symbol: "VN8.AX",
      name: "Vonex Ltd"
    },
    {
      symbol: "VNX.AX",
      name: "N/A"
    },
    {
      symbol: "VOC.AX",
      name: "Vocus Group Ltd"
    },
    {
      symbol: "VOL.AX",
      name: "Victory Offices Ltd"
    },
    {
      symbol: "VOR.AX",
      name: "Vortiv Ltd"
    },
    {
      symbol: "VP7.AX",
      name: "Velocity Property Group"
    },
    {
      symbol: "VPC.AX",
      name: "N/A"
    },
    {
      symbol: "VPR.AX",
      name: "Volt Power Group Ltd"
    },
    {
      symbol: "VR1.AX",
      name: "Vection Technologies Ltd"
    },
    {
      symbol: "VR8.AX",
      name: "Vanadium Resources Ltd"
    },
    {
      symbol: "VRC.AX",
      name: "Volt Resources Ltd"
    },
    {
      symbol: "VRI.AX",
      name: "N/A"
    },
    {
      symbol: "VRL.AX",
      name: "Village Roadshow Ltd"
    },
    {
      symbol: "VRM.AX",
      name: "N/A"
    },
    {
      symbol: "VRS.AX",
      name: "Veris Ltd"
    },
    {
      symbol: "VRT.AX",
      name: "Virtus Health Ltd"
    },
    {
      symbol: "VRX.AX",
      name: "Vrx Silica Ltd"
    },
    {
      symbol: "VSO.AX",
      name: "VSMALLCO/ETF"
    },
    {
      symbol: "VTG.AX",
      name: "Vita Group Limited"
    },
    {
      symbol: "VTH.AX",
      name: "Vitalharvest Freehold Trust"
    },
    {
      symbol: "VTI.AX",
      name: "Visioneering Technologies Inc"
    },
    {
      symbol: "VTS.AX",
      name: "VUSTOTAL/ETF"
    },
    {
      symbol: "VUK.AX",
      name: "V MONEY UK/IDR UNRESTR"
    },
    {
      symbol: "VUL.AX",
      name: "Vulcan Energy Resources Ltd"
    },
    {
      symbol: "VVA.AX",
      name: "Viva Leisure Ltd"
    },
    {
      symbol: "VVR.AX",
      name: "Viva Energy Reit Ltd"
    },
    {
      symbol: "VXL.AX",
      name: "N/A"
    },
    {
      symbol: "VXR.AX",
      name: "Venturex Resources Ltd"
    },
    {
      symbol: "VYS.AX",
      name: "Vysarn Ltd"
    },
    {
      symbol: "WAA.AX",
      name: "WAM Active Limited"
    },
    {
      symbol: "WAF.AX",
      name: "West African Resources Ltd"
    },
    {
      symbol: "WAL.AX",
      name: "N/A"
    },
    {
      symbol: "WAM.AX",
      name: "WAM Capital Limited"
    },
    {
      symbol: "WAT.AX",
      name: "Waterco Limited"
    },
    {
      symbol: "WAX.AX",
      name: "WAM Research Limited"
    },
    {
      symbol: "WBA.AX",
      name: "Webster Limited Fully Paid Ord. Shrs"
    },
    {
      symbol: "WBAPA.AX",
      name: "N/A"
    },
    {
      symbol: "WBC.AX",
      name: "Westpac Banking Corp"
    },
    {
      symbol: "WBE.AX",
      name: "Whitebark Energy Ltd"
    },
    {
      symbol: "WBT.AX",
      name: "Weebit Nano Ltd"
    },
    {
      symbol: "WCB.AX",
      name: "N/A"
    },
    {
      symbol: "WCC.AX",
      name: "N/A"
    },
    {
      symbol: "WCN.AX",
      name: "White Cliff Minerals Ltd"
    },
    {
      symbol: "WDC.AX",
      name: "N/A"
    },
    {
      symbol: "WDE.AX",
      name: "N/A"
    },
    {
      symbol: "WDMF.AX",
      name: "IEDGEWLMF/ETF"
    },
    {
      symbol: "WDR.AX",
      name: "N/A"
    },
    {
      symbol: "WDS.AX",
      name: "N/A"
    },
    {
      symbol: "WEB.AX",
      name: "Webjet Limited"
    },
    {
      symbol: "WEC.AX",
      name: "White Energy Company Limited"
    },
    {
      symbol: "WEL.AX",
      name: "Winchester Energy Ltd"
    },
    {
      symbol: "WEMG.AX",
      name: "SPDR WEMG/ETF"
    },
    {
      symbol: "WES.AX",
      name: "Wesfarmers Ltd"
    },
    {
      symbol: "WFD.AX",
      name: "N/A"
    },
    {
      symbol: "WFE.AX",
      name: "N/A"
    },
    {
      symbol: "WGB.AX",
      name: "Wam Global Ltd"
    },
    {
      symbol: "WGF.AX",
      name: "N/A"
    },
    {
      symbol: "WGL.AX",
      name: "N/A"
    },
    {
      symbol: "WGN.AX",
      name: "Wagners Holding Company Ltd"
    },
    {
      symbol: "WGO.AX",
      name: "Warrego Energy Ltd"
    },
    {
      symbol: "WGX.AX",
      name: "Westgold Resources Ltd"
    },
    {
      symbol: "WHA.AX",
      name: "Wattle Health Australia Ltd"
    },
    {
      symbol: "WHC.AX",
      name: "Whitehaven Coal Ltd"
    },
    {
      symbol: "WHF.AX",
      name: "Whitefield Limited Fully Paid Ord. Shrs"
    },
    {
      symbol: "WHFPA.AX",
      name: "N/A"
    },
    {
      symbol: "WHK.AX",
      name: "WhiteHawk Ltd"
    },
    {
      symbol: "WIC.AX",
      name: "Westoz Investment Company Limited"
    },
    {
      symbol: "WIN.AX",
      name: "N/A"
    },
    {
      symbol: "WJA.AX",
      name: "Wameja Ltd"
    },
    {
      symbol: "WKT.AX",
      name: "Walkabout Resources Ltd"
    },
    {
      symbol: "WLC.AX",
      name: "N/A"
    },
    {
      symbol: "WLD.AX",
      name: "Wellard Ltd"
    },
    {
      symbol: "WLE.AX",
      name: "Wam Leaders Ltd"
    },
    {
      symbol: "WLF.AX",
      name: "Wolf Minerals Limited"
    },
    {
      symbol: "WLL.AX",
      name: "N/A"
    },
    {
      symbol: "WMC.AX",
      name: "N/A"
    },
    {
      symbol: "WMI.AX",
      name: "Wam Microcap Ltd"
    },
    {
      symbol: "WMK.AX",
      name: "N/A"
    },
    {
      symbol: "WML.AX",
      name: "Woomera Mining Ltd"
    },
    {
      symbol: "WNB.AX",
      name: "Wellness and Beauty Solutions Ltd"
    },
    {
      symbol: "WND.AX",
      name: "Windlab Ltd"
    },
    {
      symbol: "WNR.AX",
      name: "Wingara AG Ltd"
    },
    {
      symbol: "WNS.AX",
      name: "N/A"
    },
    {
      symbol: "WOA.AX",
      name: "Wide Open Agriculture Ltd"
    },
    {
      symbol: "WOF.AX",
      name: "N/A"
    },
    {
      symbol: "WOR.AX",
      name: "Worley Ltd"
    },
    {
      symbol: "WOW.AX",
      name: "Woolworths Group Ltd"
    },
    {
      symbol: "WPG.AX",
      name: "N/A"
    },
    {
      symbol: "WPL.AX",
      name: "Woodside Petroleum Limited"
    },
    {
      symbol: "WPP.AX",
      name: "WPP Aunz Ltd"
    },
    {
      symbol: "WQG.AX",
      name: "WCM Global Growth Ltd"
    },
    {
      symbol: "WQW.AX",
      name: "N/A"
    },
    {
      symbol: "WRG.AX",
      name: "N/A"
    },
    {
      symbol: "WRM.AX",
      name: "White Rock Minerals Ltd"
    },
    {
      symbol: "WRR.AX",
      name: "N/A"
    },
    {
      symbol: "WSA.AX",
      name: "Western Areas Ltd"
    },
    {
      symbol: "WSI.AX",
      name: "Weststar Industrial Ltd"
    },
    {
      symbol: "WSP.AX",
      name: "Whispir Ltd"
    },
    {
      symbol: "WTC.AX",
      name: "WiseTech Global Ltd"
    },
    {
      symbol: "WTL.AX",
      name: "Wt Financial Group Ltd"
    },
    {
      symbol: "WTP.AX",
      name: "N/A"
    },
    {
      symbol: "WTR.AX",
      name: "N/A"
    },
    {
      symbol: "WVOL.AX",
      name: "IEDGEWLVOL/ETF"
    },
    {
      symbol: "WWG.AX",
      name: "Wiseway Group Ltd"
    },
    {
      symbol: "WWI.AX",
      name: "West Wits Mining Limited"
    },
    {
      symbol: "WXHG.AX",
      name: "SPDR WXOZH/ETF"
    },
    {
      symbol: "WXOZ.AX",
      name: "SPDR WORLD/ETF"
    },
    {
      symbol: "WZR.AX",
      name: "WISR Ltd"
    },
    {
      symbol: "XAM.AX",
      name: "Xanadu Mines Ltd"
    },
    {
      symbol: "XCD.AX",
      name: "Xcd Energy Ltd"
    },
    {
      symbol: "XF1.AX",
      name: "Xref Ltd Fully Paid Ord. Shrs"
    },
    {
      symbol: "XIP.AX",
      name: "Xenith IP Group Ltd"
    },
    {
      symbol: "XPD.AX",
      name: "N/A"
    },
    {
      symbol: "XPE.AX",
      name: "XPED Ltd"
    },
    {
      symbol: "XPL.AX",
      name: "Xplore Wealth Ltd"
    },
    {
      symbol: "XRF.AX",
      name: "XRF Scientific Limited"
    },
    {
      symbol: "XRO.AX",
      name: "Xero Limited"
    },
    {
      symbol: "XST.AX",
      name: "Xstate Resources Limited"
    },
    {
      symbol: "XTD.AX",
      name: "XTD Ltd"
    },
    {
      symbol: "XTE.AX",
      name: "Xtek Ltd"
    },
    {
      symbol: "XTV.AX",
      name: "N/A"
    },
    {
      symbol: "XXL.AX",
      name: "N/A"
    },
    {
      symbol: "YAL.AX",
      name: "Yancoal Australia Ltd"
    },
    {
      symbol: "YANK.AX",
      name: "BETAYANK/FD"
    },
    {
      symbol: "YBR.AX",
      name: "Yellow Brick Road Holdings Ltd"
    },
    {
      symbol: "YNB.AX",
      name: "N/A"
    },
    {
      symbol: "YOJ.AX",
      name: "Yojee Ltd"
    },
    {
      symbol: "YOW.AX",
      name: "Yowie Group Ltd"
    },
    {
      symbol: "YPB.AX",
      name: "YPB Group Ltd"
    },
    {
      symbol: "YRL.AX",
      name: "Yandal Resources Ltd"
    },
    {
      symbol: "Z1P.AX",
      name: "Zip Co Ltd"
    },
    {
      symbol: "ZAM.AX",
      name: "N/A"
    },
    {
      symbol: "ZCNH.AX",
      name: "N/A"
    },
    {
      symbol: "ZEL.AX",
      name: "Z Energy Ltd"
    },
    {
      symbol: "ZEN.AX",
      name: "Zenith Energy Ltd"
    },
    {
      symbol: "ZER.AX",
      name: "Zeta Resources Ltd"
    },
    {
      symbol: "ZEU.AX",
      name: "Zeus Resources Ltd"
    },
    {
      symbol: "ZGL.AX",
      name: "Zicom Group Limited"
    },
    {
      symbol: "ZGM.AX",
      name: "N/A"
    },
    {
      symbol: "ZIM.AX",
      name: "Zimplats Holdings Ltd"
    },
    {
      symbol: "ZIP.AX",
      name: "Ziptel Ltd"
    },
    {
      symbol: "ZLD.AX",
      name: "Zelira Therapeutics Ltd"
    },
    {
      symbol: "ZMI.AX",
      name: "Zinc of Ireland NL"
    },
    {
      symbol: "ZNC.AX",
      name: "Zenith Minerals Ltd"
    },
    {
      symbol: "ZNO.AX",
      name: "Zoono Group Ltd"
    },
    {
      symbol: "ZNT.AX",
      name: "N/A"
    },
    {
      symbol: "ZTA.AX",
      name: "Zeta Petroleum PLC"
    },
    {
      symbol: "ZYAU.AX",
      name: "ETFSYAU/ETF"
    },
    {
      symbol: "ZYB.AX",
      name: "N/A"
    }
  ];

  return response;
};
