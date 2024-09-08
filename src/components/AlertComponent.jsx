import { Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertComponent({ severity, message, setShowAlert }) {

    return (
        <Alert
            action={
                <IconButton aria-label="close" color="inherit" size="small" onClick={() => setShowAlert(false)} >
                    <CloseIcon fontSize="inherit" />
                </IconButton>
            }
            sx={{ mb: 2, position: 'absolute', zIndex: 100 }} variant="filled" severity={severity}
        >
            {message}
        </Alert>
    );
};