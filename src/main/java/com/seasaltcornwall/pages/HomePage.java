package com.seasaltcornwall.pages;

import com.seasaltcornwall.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//ul[@class='seasalt-menu-desktop__list']//li[@class='seasalt-menu-desktop__item  seasalt-menu-desktop__item--parent']")
    List<WebElement> topMenu;

    @CacheLookup
    @FindBy(xpath = "(//ul[@class='items']//li[2])[1]")
    WebElement verifyTopMenu;

    @CacheLookup
    @FindBy(xpath = "//button[text()='I Accept']")
    WebElement acceptCookie;

    public void selectMenu(String menu) {
        try {
            List<WebElement> list = topMenu;
            for (WebElement listOfElement : list) {
                if (listOfElement.getText().equals(menu)) {
                    listOfElement.click();
                }
            }
        } catch (StaleElementReferenceException e) {
            List<WebElement> list = topMenu;
        }
        log.info("Click on Top Menu" + topMenu.toString());
    }

    public String verifyTopMenuText() {
        log.info("Verify Navigate to Top Menu" + verifyTopMenu.toString());
        return getTextFromElement(verifyTopMenu);
    }

    public void acceptCookies() {
        log.info("Verify Navigate to Top Menu" + verifyTopMenu.toString());
        clickOnElement(acceptCookie);
    }

}
