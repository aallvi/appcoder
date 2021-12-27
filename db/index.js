import * as SQLite from 'expo-sqlite' ;

const db = SQLite.openDatabase('favs.db')

export const init = () => {
 const promise = new Promise((resolve,reject) => {

    db.transaction((tx) => {
       
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS favs (ID INTEGER PRIMARY KEY NOT NULL,
               title TEXT NOT NULL,
               copyright TEXT NOT NULL,
               date TEXT NOT NULL,
               explanation TEXT NOT NULL,
               url TEXT NOT NULL
                )`,
            [],
            () => {resolve() },
            (_, err) => { reject(err) }
        );
    });
});
   
return promise
}

export const insertFavs = (title,copyright,date,explanation,url) => {
    return new Promise((resolve,reject) => {
    //   console.log('diorr',title.title)
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO favs (title, copyright, date, explanation, url) 
                   VALUES (?, ?, ?, ?, ?)`,
                [title.title,title.copyright,title.date,title.explanation,title.url],
                (_, result) => resolve(result) ,
                (_, err) => reject(err),
            )
    
        } )
    } )
   
}

export const fetchFavs = () => {
    return new Promise((resolve,reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM favs`,
                [],
                (_,result) => resolve(result),
                (_,err) => reject(err)
            )
        })
    } )
}

export const deleteFa = (x) => {
      return new Promise ((resolve,reject) => {

          db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM favs where title=?`,
                [x.title],
                (_,result) => resolve(result),
                (_,err) => reject(err)
            )
            // console.log('desdesql',x.title)

          })
      } )
     

}