import { ComponentMeta, ComponentStory } from "@storybook/react";
import {TableComponent} from "./TableComponent";

export default {
    title: 'Example/Table',
    component: TableComponent,
    argTypes: {
        columns: { defaultValue: 0 },
        rows: {  defaultValue: 0 },
        headers: { defaultValue: [] }
    }
} as ComponentMeta<typeof TableComponent>;

const Template: ComponentStory<typeof TableComponent> = (args) => <TableComponent {...args} />;

export const GenerateTable = Template.bind({})

GenerateTable.args = {
    columns: 1,
    rows: 1,
    headers: ['data']
}