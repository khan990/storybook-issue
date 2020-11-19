import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from './button.component';

export default {
    title: 'ion-button-wrapper',
    component: ButtonComponent,
    argTypes: {
        buttonStyle: {
            control: {
                type: 'select',
                options: ['clear', 'outline', 'solid', 'default', undefined],
            },
        },
        expand: {
            control: {
                type: 'select',
                options: ['full', undefined],
            },
        },
        isLoading: {
          control: {
            type: 'boolean'
          }
        }
    },
} as Meta;

const Template: Story = (args: ButtonComponent) => ({
    props: { ...args },
    component: ButtonComponent,
});

export const Basic: Story = Template.bind({});
Basic.storyName = 'Basic';
Basic.args = {
    buttonText: 'Button Text',
    clickEvent: (event) => {
        action('Button Click Event')(event);
    },
};
