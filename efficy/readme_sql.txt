Efficy CRM supports Oracle, PostgreSQL and Microsoft SQL Server as relational databases. The latter one is our preferred database engine for Cloud installations. Show us how good you master SQL-syntax, success!

2.1 Companies
Given the following data definition, write a query that answers the next two questions. You can use this SQL Fiddle as a jump start! We have noticed that SQL Fiddle is not a stable service. When experiencing issues, download the schema and execute on local Microsoft SQL Server instance or handle it in theory.

Don't forget to copy/paste your answers here in this page.

CREATE TABLE COMPANIES (
	K_COMPANY int NOT NULL,
	NAME varchar(100) NOT NULL,
	CITY varchar(50) NULL
CONSTRAINT PK_COMPANIES PRIMARY KEY CLUSTERED (K_COMPANY))
Define a query that counts the total number of .com Companies (NAME ends with .com) located in Bangkok or Brussels

SELECT COUNT(K_COMANY)
FROM COMPANIES
WHERE (NAME LIKE '%.com') AND ((CITY is 'Bangkok') OR (CITY is 'Brussels'))

Define a query that selects the top 5 cities, sorted by the highest number of occurrences on top.

SELECT COUNT CITY c
FROM COMPANIES
ORDER BY c DESC
LIMIT 5

2.2 Companies and Contacts
Lets add two additional tables to the story, CONTACTS and the relational table CONT_COMP between both entities. Notice the primary and foreign key constraints. You can use this new SQL Fiddle to help you test the queries.


----------------------------
CREATE TABLE COMPANIES (
	K_COMPANY int NOT NULL,
	NAME varchar(100) NOT NULL,
	CITY varchar(50) NULL
CONSTRAINT PK_COMPANIES PRIMARY KEY CLUSTERED (K_COMPANY))
GO

CREATE TABLE CONTACTS (
	K_CONTACT int NOT NULL,
	NAME varchar(50) NOT NULL,
	FIRSTNAME varchar(50) NULL
CONSTRAINT PK_CONTACTS PRIMARY KEY CLUSTERED (K_CONTACT))
GO

CREATE TABLE CONT_COMP (
	K_CONTACT int NOT NULL,
	K_COMPANY int NOT NULL
CONSTRAINT PK_CONT_COMP PRIMARY KEY CLUSTERED (K_CONTACT, K_COMPANY))
GO

ALTER TABLE CONT_COMP WITH CHECK ADD CONSTRAINT FK_COMPANIES_CONT_COMP1 FOREIGN KEY(K_CONTACT)
REFERENCES CONTACTS (K_CONTACT) ON DELETE CASCADE
GO

ALTER TABLE CONT_COMP WITH CHECK ADD CONSTRAINT FK_COMPANIES_CONT_COMP2 FOREIGN KEY(K_COMPANY)
REFERENCES COMPANIES (K_COMPANY) ON DELETE CASCADE
GO

-------
Select a unique list of K_COMPANY for all Companies with at least one contact linked without using joins.

SELECT DISTINCT CONT_COMP.K_COMPANY.
FROM CONT_COMP

Select all companies that are linked or not to contacts. All columns from tables COMPANIES and CONTACTS (joined by CONT_COMP) must be selected in only one statement. The result should be sorted by Company name (A-z), second by Contact name (Z-a).

SELECT *
FROM companies
INNER JOIN cont_comp
ON cont_comp.k_company = companies.k_company
INNER JOIN CONTACTS
ON contacts.k_contact = cont_comp.k_contact
ORDER BY companies.name ASC, contacts.name DESC


Count the number of contacts without a link to a Company.

SELECT COUNT
FROM Contacts
WHERE K_Contact NOT IN (SELECT * FROM CONTACTS INNER JOIN CONT_COMP ON CONt_comp.k_contact = companies.k_contact)
