class AddTimestampsToChannelMemberships < ActiveRecord::Migration[5.1]
  def change
    add_timestamps :channel_memberships
  end
end
