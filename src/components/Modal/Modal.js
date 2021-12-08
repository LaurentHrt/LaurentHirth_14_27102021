import Button from '@mui/material/Button'
import styles from './Modal.module.css'

export default function Modal({ setOpen }) {
	return (
		<div className={styles.darkBG} onClick={() => setOpen(false)}>
			<div className={styles.centered}>
				<div className={styles.modal}>
					<h1>Employé créé avec succès !</h1>
					<Button onClick={() => setOpen(false)} variant="contained">
						Ok
					</Button>
				</div>
			</div>
		</div>
	)
}
