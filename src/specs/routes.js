const routes = [
  {
    path: "overview",
    routes: [
      {
        path: "emissions-and-cost",
        charts: [
          "SYS_Emissions_CO2_Domestic",
          "SYS_CO2Price",
          "SYS_Cost_Sector",
          "SYS_LumpInv_Sector",
          "SYS_DACS",
          "SYS_FEC_Fuel"
        ]
      },
      {
        path: "final-energy-consumption",
        charts: [
          "SYS_FEC_Fuel",
          "SYS_FEC_Sector",
          "SYS_FEC-BIODST_Sector",
          "SYS_FEC-BIOETH_Sector",
          "SYS_FEC-BIOGAS_Sector",
          "SYS_FEC-BIOWOOx_Sector",
          "SYS_FEC-COA_Sector",
          "SYS_FEC-ELCD_Sector",
          "SYS_FEC-GASNAT_Sector",
          "SYS_FEC-H2_Sector",
          "SYS_FEC-HETD_Sector",
          "SYS_FEC-OILGSL_Sector",
          "SYS_FEC-HFO_Sector",
          "SYS_FEC-OILKER_Sector",
          "SYS_FEC-OILDST_Sector",
          "SYS_FEC-LPG_Sector",
          "SYS_FEC-PEAT_Sector"
        ]
      },
      {
        path: "primary-energy",
        charts: [
          "SYS_NRG-Export",
          "SYS_NRG-Import",
          "SYS_NRG-Ind_Supply",
          "SYS_TPED"
        ]
      },
      {
        path: "other",
        charts: [
          "SYS_Emissions_CO2_Domestic_Cumulative",
          "SYS_Cost_Sector_Cumulative",
          "SYS_LumpInv_Sector_Cumulative",
          "AGR_CO2N_Price",
          "IND_CO2N_Price",
          "IND_CO2P_Price",
          "PWR_CO2N_Price",
          "RSD_CO2_Price",
          "SRV_CO2N_Price",
          "TRA_CO2N_Price"
        ]
      }
    ]
  },
  {
    path: "supply",
    charts: ["SUP_BIODST", "SUP_BIOETH", "SUP_BIOGAS", "SUP_HYDROGEN"]
  },
  {
    path: "power",
    charts: [
      "PWR_Cap",
      "PWR_Cap-N",
      "PWR_Emissions-CO2",
      "PWR_Gen-ELCC",
      "PWR_Gen-HETC"
    ]
  },
  {
    path: "transport",
    routes: [
      {
        path: "overview",
        charts: ["TRA_Emissions-CO2", "TRA_FEC", "TRA-Land_LumpInv"]
      },
      {
        path: "final-energy-consumption",
        charts: [
          "TRA_Freight_Land_FuelCons",
          "TRA_Passenger_Land_FuelCons",
          "TRA_AVIDOM_FuelCons",
          "TRA_AVIINT_FuelCons",
          "TRA_NAV_FuelCons",
          "TRA_OTH_FuelCons",
          "TRA_TURS_FuelCons"
        ]
      },
      {
        path: "vehicle-sales-and-stock",
        charts: [
          "TRA_P-CAR-N_TYPE",
          "TRA_P-CAR_TYPE",
          "TRA_F-HTRUCK-N_TYPE",
          "TRA_F-MTRUCK-N_TYPE",
          "TRA_F-LTRUCK-N_TYPE",
          "TRA_F-HTRUCK_TYPE",
          "TRA_F-MTRUCK_TYPE",
          "TRA_F-LTRUCK_TYPE"
        ]
      },
      {
        path: "vehicle-activity",
        charts: [
          "TRA_Freight_Land_Mode",
          "TRA_Passenger_Land_Distance",
          "TRA_Passenger_Land_Mode",
          "TRA_Passenger_Land_Mode-L",
          "TRA_Passenger_Land_Mode-M",
          "TRA_Passenger_Land_Mode-S"
        ]
      }
    ]
  },
  {
    path: "residential",
    routes: [
      {
        path: "overview",
        charts: ["RSD_Services_CO2Emissions"]
      },
      {
        path: "final-energy-consumption",
        charts: [
          "RSD_Services_EnergyCons",
          "RSD_FEC",
          "RSD_WaterSpace_FuelCons",
          "RSD_WS-APT_FuelCons",
          "RSD_WS-ATT_FuelCons",
          "RSD_WS-DET_FuelCons",
          "RSD_OtherServices_FuelCons"
        ]
      },
      {
        path: "retrofits",
        charts: [
          "RSD_RTFT-APT_NCAP",
          "RSD_RTFT-ATT_NCAP",
          "RSD_RTFT-DET_NCAP",
          "RSD_RTFT_NRG_SAVINGS"
        ]
      },
      {
        path: "new-heating",
        charts: ["RSD_WS-APT_NCAP", "RSD_WS-ATT_NCAP", "RSD_WS-DET_NCAP"]
      },
      {
        path: "house-stock",
        charts: ["RSD_BLD_TYPE", "RSD_BLD-N_TYPE"]
      }
    ]
  },
  {
    path: "services",
    charts: [
      "SRV_FEC_Service",
      "SRV_FEC",
      "SRV-COM_FEC_WS",
      "SRV-PUB_FEC_WS",
      "SRV_FEC_DCs",
      "SRV-DCs_EH",
      "SRV-DCs_EH_DH-Grid"
    ]
  },
  {
    path: "industry",
    charts: [
      "IND_FEC",
      "IND_Emissions-CO2",
      "IND-TAP_FEC",
      "IND-ONM_FEC",
      "IND-TEM_FEC",
      "IND-WAP_FEC",
      "IND-OMA_FEC",
      "IND-RAP_FEC",
      "IND-EOE_FEC",
      "IND-CON_FEC",
      "IND-PX4_FEC",
      "IND-CAF_FEC",
      "IND-FAB_FEC",
      "IND-MAP_FEC",
      "IND-NEM_FEC",
      "IND-MAE_FEC"
    ]
  },
  {
    path: "agriculture",
    charts: ["AGR_FEC"]
  }
];

export default routes;
