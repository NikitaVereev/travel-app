import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { IAuthForm } from './auth.interface'
import styles from './Auth.module.scss'

const Auth: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<IAuthForm>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {}

	return (
		<div className={styles.wrapper}>
			<h1>Authorization</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register('email', { required: 'Email is invalid!' })}
						type='text'
						placeholder='email'
					/>
					{errors.email && <div className={styles.error}>{errors.email}</div>}
				</div>
				<div>
					<input
						{...register('password', { required: 'Password is invalid!' })}
						type='text'
						placeholder='password'
					/>
					{errors.password && (
						<div className={styles.error}>{errors.password}</div>
					)}
				</div>
				<button>Auth</button>
			</form>
		</div>
	)
}

export default Auth
