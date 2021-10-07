-- RenameIndex
ALTER INDEX "accounts.compound_id_unique" RENAME TO "accounts_compound_id_key";

-- RenameIndex
ALTER INDEX "hot_items.name_unique" RENAME TO "hotItems_name_key";

-- RenameIndex
ALTER INDEX "sessions.access_token_unique" RENAME TO "sessions_access_token_key";

-- RenameIndex
ALTER INDEX "sessions.session_token_unique" RENAME TO "sessions_session_token_key";

-- RenameIndex
ALTER INDEX "shops.domain_unique" RENAME TO "shops_domain_key";

-- RenameIndex
ALTER INDEX "users.email_unique" RENAME TO "users_email_key";
