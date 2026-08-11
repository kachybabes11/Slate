import express from "express"
import {getAllNotes, createNewNote, editNote, deleteNote, getNoteById} from "../controllers/notesControllers.js"

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById)
router.post("/", createNewNote )
router.put("/:id",editNote )
router.delete("/:id", deleteNote)

export default router;