require('dotenv').config();

async function TableHandler(noLog) {
    var JSSQL = require('jssql');
    var Database = JSSQL.Database;

    /**
     * Connection pools should update with our RDS
     *
     * https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Performance.html
     */

    var _Database;
    if (typeof process.env.RDS_HOSTNAME === "undefined") {
        _Database = new Database({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'template',
            connectionLimit: parseInt(process.env.CONNECTION_LIMIT)
        });

        if (typeof noLog === "undefined") {
            console.log('Template >> We are running off local.');
        }
    } else {
        _Database = new Database({
            host: process.env.RDS_HOSTNAME,
            user: process.env.RDS_USERNAME,
            password: process.env.RDS_PASSWORD,
            database: process.env.RDS_DB_NAME,
            connectionLimit: parseInt(process.env.CONNECTION_LIMIT)
        });

        if (typeof noLog === "undefined") {
            console.log('Template >> We are running off a src.');
        }
    }

    var attempts = 0;

    function tryDatabase() {
        _Database.table([
            /* Account Routes */
            require('./account/Accounts'),
        ]);

        setTimeout(async function () {
            "use strict";

            // ANY CHANGES WE CNA DO HERE
        }, 2500);
    }

    async function retry() {
        try {
            await tryDatabase();
        } catch (ex) {
            console.log("Attemping Database: " + attempts, ex);
        }
    }


    await retry();
}

module.exports = TableHandler;
