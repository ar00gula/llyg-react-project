class CreateAuthors < ActiveRecord::Migration[6.1]
  def change
    create_table :authors do |t|
      t.string :nfirst_name
      t.string :last_name

      t.timestamps
    end
  end
end
