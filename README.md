# Consegna

## MILESTONE 1

Create un nuovo context chiamato BudgetContext

- Deve contenere uno stato budgetMode di tipo booleano (true/false)
- Deve fornire anche la funzione per modificarlo (setBudgetMode)
- Wrappiamo l’intera applicazione con il BudgetProvider

## MILESTONE 2

Create un componente Navbar.jsx (se non lo avete già)

- Inseritelo in App.jsx (oppure nel vostro componente di layout se avete organizzato l’app in questo modo).
- All’interno della Navbar aggiungete un bottone “Modalità Budget” che attiva/disattiva budgetMode con un click.
- Il bottone deve cambiare etichetta in base allo stato (Attiva Modalità Budget / Disattiva Modalità Budget).

## MILESTONE 3

Modificate la pagina dei prodotti:

- Recuperate il valore budgetMode usando il context.
- Se budgetMode === true, mostrate solo i prodotti con price <= 30.
- Altrimenti, mostrare tutti i prodotti normalmente.

### BONUS
Valutare se può aver senso centralizzare i dati dei prodotti nel context e quindi richiamarli da li, invece che da pagine e/o componenti.