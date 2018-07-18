//Database things
import * as JsStore from 'jsstore';
const dbName = "Database";

import * as workerPath from "jsstore/dist/jsstore.worker.js";

// Ensure only one instance. 
const idbCon = new JsStore.Instance(new Worker(workerPath));
const connection = idbCon;

function getDbSchema() {
  const Table = {
    name: 'Table1',
    columns: [
      {
        name: "id",
        primaryKey: true,
        autoIncrement: true
      },
      {
        name: "contents",
        notNull: true,
        dataType: JsStore.DATA_TYPE.String
      },
      {
        name: "date",
        notNull: true,
        dataType: JsStore.DATA_TYPE.String
      },
      {
        name: "time",
        notNull: true,
        dataType: JsStore.DATA_TYPE.String
      }
    ]
  };
  
  const Database = {
    name: dbName,
    tables: [Table]
  };
  
  return Database;
}

function initJsStore() {
  connection.isDbExist(dbName).then(function(isExist) {
    if (isExist) {
        connection.openDb(dbName);
    } else {
        var database = getDbSchema();
        connection.createDb(database);
    }
  }).catch(function(err) {
      console.error(err);
  })
}

export class Storage {
  DiscordStorage(content) {
    // Datetime things
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    let hour = date.getHours();
    let minute = date.getMinutes();
  
    let values = {
      contents: content,
      date: month + "-" + day + "-" + year,
      time: hour + ":" + minute
    }
    
    this.appendStorage(values);
  }
  
  appendStorage(data) {
    connection.insert({
      into: "Database",
      values: data
    })
  }
}
