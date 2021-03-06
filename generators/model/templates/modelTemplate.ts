
import { Table, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { BaseModel } from "../libraries/BaseModel";
<% if (belongsToUser) { %>import { User } from "./User";<% } %>

@Table({
  tableName: "<%- tableName %>"
})
export class <%- modelName %> extends BaseModel<<%- modelName %>> {

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null
  })
  name: string;
<% if (belongsToUser) { %>
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
<% } %>
}
