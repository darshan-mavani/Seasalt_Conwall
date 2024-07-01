$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "As user I should navigate to selected menu page",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"\u003cTopmenu tab\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to selected menu page \"\u003cNavigate Page\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;",
  "rows": [
    {
      "cells": [
        "Topmenu tab",
        "Navigate Page"
      ],
      "line": 10,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;1"
    },
    {
      "cells": [
        "NEW",
        "New Arrivals"
      ],
      "line": 11,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2"
    },
    {
      "cells": [
        "WOMEN\u0027S",
        "Womens"
      ],
      "line": 12,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3"
    },
    {
      "cells": [
        "MEN\u0027S",
        "Men\u0027s"
      ],
      "line": 13,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4"
    },
    {
      "cells": [
        "GIFTS",
        "Gifts \u0026 Home"
      ],
      "line": 14,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;5"
    },
    {
      "cells": [
        "SEASALT LIFE",
        "Seasalt Lif"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18526127400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"NEW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to selected menu page \"New Arrivals\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStpes.iAmOnHomepage()"
});
formatter.result({
  "duration": 343305200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NEW",
      "offset": 26
    }
  ],
  "location": "TopMenuStpes.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 10209493300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New Arrivals",
      "offset": 41
    }
  ],
  "location": "TopMenuStpes.iShouldNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 4012228700,
  "status": "passed"
});
formatter.after({
  "duration": 2571443000,
  "status": "passed"
});
formatter.before({
  "duration": 63599208400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"WOMEN\u0027S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to selected menu page \"Womens\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStpes.iAmOnHomepage()"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN\u0027S",
      "offset": 26
    }
  ],
  "location": "TopMenuStpes.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 47738300,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d126.0.6478.127)\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [996a7e7baaae08a8f940175c21216be8, findElement {using\u003dxpath, value\u003d(//ul[@class\u003d\u0027items\u0027]//li[2])[1]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 126.0.6478.127, chrome: {chromedriverVersion: 126.0.6478.126 (d36ace6122e..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55915}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55915/devtoo..., se:cdpVersion: 126.0.6478.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 996a7e7baaae08a8f940175c21216be8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:349)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:68)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy24.toString(Unknown Source)\r\n\tat com.seasaltcornwall.pages.HomePage.acceptCookies(HomePage.java:53)\r\n\tat com.seasaltcornwall.steps.TopMenuStpes.iClickOnAnyMenuFrom(TopMenuStpes.java:16)\r\n\tat ✽.When I click on any menu from \"WOMEN\u0027S\"(TopMenu.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Womens",
      "offset": 41
    }
  ],
  "location": "TopMenuStpes.iShouldNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 14945000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d126.0.6478.127)\nBuild info: version: \u00274.11.0\u0027, revision: \u0027040bc5406b\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [996a7e7baaae08a8f940175c21216be8, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 126.0.6478.127, chrome: {chromedriverVersion: 126.0.6478.126 (d36ace6122e..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:55915}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:55915/devtoo..., se:cdpVersion: 126.0.6478.127, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 996a7e7baaae08a8f940175c21216be8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:196)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:171)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:591)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:321)\r\n\tat com.seasaltcornwall.utility.Utility.getScreenshot(Utility.java:59)\r\n\tat com.seasaltcornwall.Hooks.tearDown(Hooks.java:22)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 9220569900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should navigate to selected menu page",
  "description": "",
  "id": "top-menu-test;user-should-navigate-to-selected-menu-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on any menu from \"MEN\u0027S\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to selected menu page \"Men\u0027s\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuStpes.iAmOnHomepage()"
});
formatter.result({
  "duration": 121700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MEN\u0027S",
      "offset": 26
    }
  ],
  "location": "TopMenuStpes.iClickOnAnyMenuFrom(String)"
});
formatter.result({
  "duration": 8766899600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Men\u0027s",
      "offset": 41
    }
  ],
  "location": "TopMenuStpes.iShouldNavigateToSelectedMenuPage(String)"
});
formatter.result({
  "duration": 461231100,
  "status": "passed"
});
formatter.after({
  "duration": 1042210900,
  "status": "passed"
});
