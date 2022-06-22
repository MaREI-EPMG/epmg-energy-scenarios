import chartsInfo from "./specs/chartsInfo";
import chartsTitles from "./specs/chartsTitles";
import seriesTitles from "./specs/seriesTitles";
import scenarioTitles from "./specs/scenarioTitles";
import scenarios from "./specs/scenarios";
import routes from "./specs/routes";
import contentNavs from "./specs/contentNavs";

const chartsPath = "results/*";

const studies = [
  "tim-carbon-budgets-2021",
  "tim-energy-security-2022",
  "tim-carbon-budgets-2022"
];

const headerNavs = [{ to: "results", text: "Results" }];

const orgGhPages = "https://MaREI-EPMG.github.io";

let config = {};

studies.forEach(
  (study) =>
    (config[study] = {
      chartsInfo: chartsInfo,
      chartsPath: chartsPath,
      titles: {
        charts: chartsTitles,
        series: seriesTitles,
        scenarios: scenarioTitles
      },
      scenarios: scenarios[study],
      defaultScenarioGroup: scenarios[study][0].name,
      landingPage: "about",
      routes: routes,
      contentNavs: contentNavs,
      headerNavLinks: headerNavs,
      basePath: `${orgGhPages}/${study}`
    })
);

export { config as default };
