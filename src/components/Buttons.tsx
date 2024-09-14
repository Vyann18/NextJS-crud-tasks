import axios from "axios";
import { useRouter } from "next/navigation";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function ButtonCreate() {
  return (
    <button
      type="submit"
      className="w-[60%] px-3 py-1 rounded-md bg-slate-500 uppercase text-white font-bold hover:bg-slate-600 
          hover:scale-105 dark:text-black dark:bg-slate-300 dark:hover:text-white dark:hover:bg-slate-500 transition-all"
    >
      Crear
    </button>
  );
}

function ButtonUpdate() {
  return (
    <button
      type="submit"
      className="w-[60%] px-3 py-1 rounded-md bg-slate-500 uppercase text-white font-bold hover:bg-green-700 
          hover:scale-105 dark:text-black dark:bg-slate-300 dark:hover:text-white dark:hover:bg-green-700 transition-all"
    >
      Actualizar
    </button>
  );
}

function ButtonDelete({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        type="button"
        variant="contained"
        color="error"
        onClick={handleClickOpen}
        className="w-[60%] px-3 py-1 rounded-md bg-slate-500 uppercase text-white font-bold hover:bg-red-900
//       hover:scale-105 dark:text-black dark:bg-slate-300 dark:hover:text-white dark:hover:bg-red-900 transition-all"
      >
        Eliminar
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Estas seguro que deseas eliminar esta tarea?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Una vez eliminada, esta tarea no podrá ser recuperada.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={async () => {
              await axios.delete(`/api/tasks/${params.id}`);
              router.push("/");
              router.refresh();
            }}
            className="bg-red-700 hover:bg-red-900 transition-all"
          >
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const Buttons = { ButtonCreate, ButtonUpdate, ButtonDelete };

export default Buttons;
