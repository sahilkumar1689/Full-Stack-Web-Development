import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";
import {addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc} from "firebase/firestore";
import { app } from "../FirebaseAuth";


// 1. Add student data in the realltime database of firebase:
const db = getDatabase(app);

// Add student in the firebase:
export const addNewStudent = async (stdObj) => {
  try {
    await set(ref(db, "student/" + stdObj.stdName), stdObj);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

// Get students data:
export const getStudents = () => {
  return new Promise((resolve) => {
    const databaseRef = ref(db, 'student');
    onValue(databaseRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      // const filteredData = data.filter(student => student !== null && student !== undefined);
      resolve(data);
    });
  });
}

// Delete Student:
export const deleteStd = (deleteId)=>{
  return new Promise ((resolve)=>{
    const stdRef = ref(db,'student/'+deleteId);
    remove(stdRef);
    resolve(1);
  });
}

// Update Data:
export const updateStdData = (newstdObj)=>{
  return new Promise ((resolve)=>{
    const stdRef = ref(db,'student/'+newstdObj.stdName);
    update(stdRef,{stdPhone:newstdObj.stdPhone});
    resolve(1);
  });
}


// 2. Adding the faculty data in the firestore database of firebase:

// Add faculty:

const firestoredb = getFirestore(app);
const DBName = 'facultyDetails';

export const addFaculty = async(empObj)=>{
  try {
    const docRef = await addDoc(collection(firestoredb,DBName),empObj);
    return docRef;
  } catch (err) {
    return err;
  }
}

// 2. Get Data From the firestore:
export const getFaculty = async()=>{
  try {
    const docRef = collection(firestoredb,DBName);
    const docSnap = await getDocs(docRef);
    const empData = docSnap?.docs.map(elem=>({
      dbId:elem.id,
      ...elem.data(),
    }))
    // console.log(empData);
    // Basically we try to handle the situation when the last data is delete then it return the empty array:
    return empData.length === 0?null:empData;
  } catch (err) {
    // console.log(err.message);
    return err;
  }
}

// 3. Delete Data from the firestore:

export const deleteFaculty = async (dbId)=>{
    try {
      const docRef = doc(firestoredb,DBName,dbId);
      await deleteDoc(docRef);
      return 1;
    } catch (err) {
      return err;
    }
}

// 4. Update data from the firestore:

export const updateFaculty = async(dbId,newData)=>{
  try {
    const dbRef = doc(firestoredb,DBName,dbId);
    await updateDoc(dbRef,newData);
    return 1;
  } catch (err) {
    return err;
  }
}