import React from 'react';
import styles from "../../Register.module.css";
import {ContainerWrapper} from './styles'

export const RegisterHeader: React.FC = () => {

  return (
    <ContainerWrapper>
      <img className={styles.effectIcon} alt="" src="/effect.svg" />
      <div className={styles.oRegistroDeveSerFeitoPor}>
        O registro deve ser feito por agente autorizado pela União e os dados
        serão verificados antes do registro de fato.
      </div>
      <div className={styles.registroComContaAutorizada}>
        Registro com conta autorizada
      </div>
    </ContainerWrapper>
  )
}
