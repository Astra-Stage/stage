// Return all properties from firestore
import { db, doc, getDoc, getDocs} from '../modules/firebase.js'

// All Properties and Single property
let q;
let properties;
async function propertyFuncion(propertyId){
    
    if(propertyId)
    {
        const docRef = doc(db, "PROPERTIES", propertyId);
        properties = await getDoc(docRef);
        // console.log(properties.data())
    }
    else{
        q = query(collection(db,"PROPERTIES"));
        properties = await getDocs(q);
        // console.log(properties.data())
    }

    // return properties data
    return properties.data();
}

export { propertyFuncion }