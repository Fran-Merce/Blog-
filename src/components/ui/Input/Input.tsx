import styles from "./Input.module.scss";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  customClass?: string;
}

export const Input = ({ customClass, label, error, ...props }: Props) => {
  return (
    <div className={customClass}>
      {label && <label htmlFor="">{label}</label>}
      <input className={styles.input} {...props} type="text" />
      {error && <span>{error}</span>}
    </div>
  );
};
