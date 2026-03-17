create table shipment_status (
id int primary key identity(1,1),
order_id int not null,
status nvarchar(10) not null
check (status in ('Created','Packed','Shipped','Delivered')),
event_time datetime not null default getdate()
)