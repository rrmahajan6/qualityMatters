Feature: Navigation to website

@smoke
Scenario: open website smoke
    Given user navigate to website
    When user can click on form submit
    Then verify user is on form submit page

@regression
Scenario: open website regression
    Given user navigate to website
    When user can click on form submit
    Then verify user is on form submit page

Scenario Outline: open website scenario outline
    Given user navigate to website
    When user can click on form submit
    When user enters "rahul" and "mahajan"
    When user enters credentials "<username>" and "<password>"
    Then verify user is on form submit page

    Examples:
    |username|password|
    |sapna|sapna@123|
    |ruchi|ruchi@123|
