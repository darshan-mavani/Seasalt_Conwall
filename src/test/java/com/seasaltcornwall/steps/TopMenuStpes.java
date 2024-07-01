package com.seasaltcornwall.steps;

import com.seasaltcornwall.pages.HomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class TopMenuStpes {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on any menu from \"([^\"]*)\"$")
    public void iClickOnAnyMenuFrom(String topMenu) {
        new HomePage().acceptCookies();
        new HomePage().selectMenu(topMenu);
    }

    @Then("^I should navigate to selected menu page \"([^\"]*)\"$")
    public void iShouldNavigateToSelectedMenuPage(String verifyMenu) {
        Assert.assertEquals(verifyMenu, new HomePage().verifyTopMenuText(), "Navigation Failed");
    }
}
