// contains EPMG customisation
import React from "react";
import EnergyCharts from "../energy-charts";
import useFetch from "../energy-charts/hooks/useFetch";
import {
  chartsInfo as commonChartsInfo,
  chartsTitles as commonChartsTitles,
  seriesTitles as commonSeriesTitles,
  scenarioTitles as commonScenarioTitles,
  scenarios as commonScenarios,
  routes as commonRoutes,
  contentNavs as commonContentNavs
} from "../specs";

const chartsPath = "results/*";
const headerNavLinks = [
  { to: "results", text: "Charts" },
  { to: "about", text: "About this study" }
];
const headerNavBrand = { brand: "All studies", to: "/" };
// years shown on the charts; a study can change them in specs/settings.json,
// e.g. { "firstYear": 2020, "lastYear": 2070 }
const defaultFirstYear = 2020;
const defaultLastYear = 2050;
const defaultPeriodCount = defaultLastYear - defaultFirstYear + 1;

function studyPeriods(settings) {
  const isYear = (value) => Number.isInteger(value) && value > 1900 && value < 2200;
  let firstYear = settings && settings.firstYear;
  let lastYear = settings && settings.lastYear;
  if (!isYear(firstYear)) firstYear = defaultFirstYear;
  if (!isYear(lastYear) || lastYear < firstYear) lastYear = Math.max(defaultLastYear, firstYear);
  return Array.from(Array(lastYear - firstYear + 1), (e, i) => firstYear + i);
}


function Portal(props) {
  const { source, study, cache, alert } = props;

  const [isRepoChartsInfoLoading, repoChartsInfo] = useFetch(
    `${source}/${study}/specs/chartsInfo.json`,
    cache
  );

  const [isRepoChartsTitlesLoading, repoChartsTitles] = useFetch(
    `${source}/${study}/specs/chartsTitles.json`,
    cache
  );

  const [isRepoSeriesTitlesLoading, repoSeriesTitles] = useFetch(
    `${source}/${study}/specs/seriesTitles.json`,
    cache
  );

  const [isRepoScenarioTitlesLoading, repoScenarioTitles] = useFetch(
    `${source}/${study}/specs/scenarioTitles.json`,
    cache
  );

  const [isRepoScenariosLoading, repoScenarios] = useFetch(
    `${source}/${study}/specs/scenarios.json`,
    cache
  );

  const [isRepoRoutesLoading, repoRoutes] = useFetch(
    `${source}/${study}/specs/routes.json`,
    cache
  );

  const [isRepoContentNavsLoading, repoContentNavs] = useFetch(
    `${source}/${study}/specs/contentNavs.json`,
    cache
  );
  
  const [isRepoSettingsLoading, repoSettings] = useFetch(
    `${source}/${study}/specs/settings.json`,
    cache
  );

  const chartsInfo = repoChartsInfo ? repoChartsInfo : commonChartsInfo;
  const chartsTitles = repoChartsTitles ? repoChartsTitles : commonChartsTitles;
  const seriesTitles = repoSeriesTitles ? repoSeriesTitles : commonSeriesTitles;
  const scenarioTitles = repoScenarioTitles
    ? repoScenarioTitles
    : commonScenarioTitles;
  const scenarios = repoScenarios ? repoScenarios : commonScenarios[study];
  const routes = repoRoutes ? repoRoutes : commonRoutes;
  const contentNavs = repoContentNavs ? repoContentNavs : commonContentNavs;
  const periods = studyPeriods(repoSettings);
  // with more years than the default, make the bars narrower so that they keep the same spacing
  const barScaling = Math.min(1, defaultPeriodCount / periods.length);


  const isDataLoading =
    isRepoChartsInfoLoading ||
    isRepoChartsTitlesLoading ||
    isRepoSeriesTitlesLoading ||
    isRepoScenarioTitlesLoading ||
    isRepoScenariosLoading ||
    isRepoRoutesLoading ||
    isRepoContentNavsLoading ||
    isRepoSettingsLoading;

  const config = !isDataLoading
    ? {
        alert: alert,
        barWidth: Math.max(2, Math.round(12 * barScaling)),
        basePath: `${source}/${study}`,
        chartPadding: { left: 40, right: 20, top: 50, bottom: 35 },
        chartsInfo: chartsInfo,
        chartsPath: chartsPath,
        contentNavs: contentNavs,
        dataDownload: true,
        defaultScenarioGroup: scenarios[0].name,
        fixedDomain: false,
        headerNavBrand: headerNavBrand,
        headerNavLinks: headerNavLinks,
        landingPage: "about",
        maxChartWidth: 600,
        routes: routes,
        scenarios: scenarios,
        showSearchParams: true,
        stackbarOffset: Math.max(2, Math.round(5 * barScaling)),
        titles: {
          charts: chartsTitles,
          series: seriesTitles,
          scenarios: scenarioTitles
        },
        xDomainPadding: 10,
        xGridValues: periods
      }
    : {};

  return !isDataLoading && <EnergyCharts config={config} />;
}

export default Portal;
