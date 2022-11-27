//Funcion generalizada para ejecutar querys

const executeQuery = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if(err) return reject(err);
            resolve(result);
        });
    });
}

//Funcion para usr por clientID
const executeQueryOne = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (err, result) => {
            if(err) return reject(err);
            if(result.length === 0) return resolve(null);
            resolve(result[0]);
        });
    });
}

module.exports = { executeQuery, executeQueryOne}