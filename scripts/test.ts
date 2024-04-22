namespace test {
    class fruit {
        stem: string;
    }
    class foo {
        aaa: string;
    }

    interface Person {
        name: string;
        cash: number;
    }

    interface Entry {
        debtor: Person;
        collector: Person;
        amount: number;
    }

    class Ledger {
        public persons: Person[]
        public entries: Entry[];

        /**
         *
         */
        constructor() {
            this.persons = [];
            this.entries = [];
        }

        public addEntry(entry: Entry) {
            if (!this.persons.some((p) => p.name === entry.collector.name)) {
                this.persons.push(entry.collector);
            }
            if (!this.persons.some((p) => p.name === entry.debtor.name)) {
                this.persons.push(entry.debtor);
            }
            this.entries.push(entry);
        }

        public tallyUp() {
            let i: number = 0;
            for (i = this.entries.length - 1; i >= 0; i--) {
                let curEntry = this.entries.pop();
                curEntry.debtor.cash -= curEntry.amount;
                curEntry.collector.cash += curEntry.amount;
            }
        }

        public toString() {
            console.log("Persons: " + JSON.stringify(this.persons));
            console.log("Entries: " + JSON.stringify(this.entries));
        }
    }

    function createEntry(debtor: Person, collector: Person, amount: number): Entry {
        return <Entry>{
            debtor: debtor,
            collector: collector,
            amount: amount
        }
    }

    function createLedger(): Ledger {
        return new Ledger();
    }

    function runLedgerTest() {
        let ledger = createLedger();
        ledger.addEntry(createEntry(
            {
                name: 'a',
                cash: 0
            },
            {
                name: 'b',
                cash: 0
            },
            5
        ));
        ledger.addEntry(createEntry(
            {
                name: 'a',
                cash: 0
            },
            {
                name: 'c',
                cash: 0
            },
            10
        ));
        ledger.addEntry(createEntry(
            {
                name: 'b',
                cash: 0
            },
            {
                name: 'd',
                cash: 0
            },
            18
        ));
        ledger.addEntry(createEntry(
            {
                name: 'e',
                cash: 0
            },
            {
                name: 'd',
                cash: 0
            },
            24
        ));
        ledger.addEntry(createEntry(
            {
                name: 'a',
                cash: 0
            },
            {
                name: 'd',
                cash: 0
            },
            2
        ));
        console.log(ledger);
        ledger.tallyUp();
        console.log(ledger);
    }



    runLedgerTest();

    //#region Extract fields with their original names from an object
    let testObject = {
        a: 1,
        b: 2,
        c: 3
    }
    const { a } = testObject;

    //#endregion
}