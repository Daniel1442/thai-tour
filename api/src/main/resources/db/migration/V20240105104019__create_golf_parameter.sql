create table golf_parameter
(
    id                 uuid         default public.uuid_generate_v4() not null,
    golf_id           uuid         default public.uuid_generate_v4() not null,
    parameter_id       uuid         default public.uuid_generate_v4() not null,
    parameter_value_id uuid         default public.uuid_generate_v4() not null,
    created_at         timestamp    default CURRENT_TIMESTAMP,
    created_by         varchar(255)                                   not null,
    updated_at         timestamp,
    updated_by         varchar(255) default NULL:: character varying
);