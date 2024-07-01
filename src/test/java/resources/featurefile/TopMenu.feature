Feature: Top Menu Test
  As user I should navigate to selected menu page

  @regression
  Scenario Outline: User should navigate to selected menu page
    Given I am on homepage
    When I click on any menu from "<Topmenu tab>"
    Then I should navigate to selected menu page "<Navigate Page>"
    Examples:
      | Topmenu tab  | Navigate Page |
      | NEW          | New Arrivals  |
      | WOMEN'S      | Womens        |
      | MEN'S        | Men's         |
      | GIFTS        | Gifts & Home  |
      | SEASALT LIFE | Seasalt Lif   |




