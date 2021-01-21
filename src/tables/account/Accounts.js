import {Table, Scheme} from "jssql"

const Accounts = new Table('Accounts', new Scheme({
    ID: {
        TYPE: "INT",
        AI: true,
        INDEX: "PRIMARY KEY",
        NULL: false
    },
    FIRST_NAME: {
        TYPE: "VARCHAR",
        LENGTH: 35,
        NULL: false
    },
    LAST_NAME: {
        TYPE: "VARCHAR",
        LENGTH: 35,
        NULL: false
    },
    LOGO: {
        TYPE: "VARCHAR",
        LENGTH: 128
    },
    EMAIL: {
        TYPE: "VARCHAR",
        LENGTH: 150
    },
    PHONE: {
        TYPE: "VARCHAR",
        LENGTH: 15
    },
    DATE_CREATED: {
        TYPE: "BIGINT",
        LENGTH: 16
    },
    DATE_UPDATED: {
        TYPE: "BIGINT",
        LENGTH: 16
    }
}));

module.exports = Accounts;
