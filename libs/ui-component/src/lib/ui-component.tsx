import styles from './ui-component.module.scss';

/* eslint-disable-next-line */
export interface UiComponentProps {}

export function UiComponent(props: UiComponentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiComponent!</h1>
    </div>
  );
}

export default UiComponent;
