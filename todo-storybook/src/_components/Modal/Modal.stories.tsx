import Modal, { ModalProps } from "./Modal";
import { Meta, Story } from '@storybook/react';

export default {
    title: 'Modal',
    component: Modal,
} as Meta;

export const Frame: Story<ModalProps> = () => <Modal close={() => {}} />