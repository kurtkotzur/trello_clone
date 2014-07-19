json.array!(@board_memberships) do |board_membership|
  json.partial!("board_membership", board_membership: board_membership)
end