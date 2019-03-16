
--����ԤԼ��
CREATE TABLE 'appointing' (
	'appointing_id' int(11) NOT NULL AUTO_INCREMENT COMMENT 'ԤԼID',
	'baber_id' int(11) NOT NULL COMMENT '��ʦID',
	'consumer_id' int(11) NOT NULL COMMENT '�˿�ID',
	'service_id' int(11) NOT NULL COMMENT '����ID',
	'appointed_time' varchar(100) NOT NULL COMMENT 'ԤԼʱ��',
	'status' varchar(100) NOT NULL COMMENT 'ԤԼ״̬',
	PRIMARY KEY ('appointing_id'),
	FOREIGN KEY ('baber_id') REFERENCES baber('baber_id'),
	FOREIGN KEY ('consumer_id') REFERENCES consumer('consumer_id'),
	FOREIGN KEY ('service_id') REFERENCES service('service_id')
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='ԤԼ��';

--�����˿ͱ�
CREATE TABLE 'consumer' (
	'consumer_id' int(11) NOT NULL AUTO_INCREMENT COMMENT '�˿�ID',
	'name' varchar(100) NOT NULL COMMENT '�˿�����',
	'tel_num' varchar(100) NOT NULL COMMENT'�绰',
	'sex' boolen NOT NULL COMMENT'�Ա�',
	'password' varchar(100) NOT NULL COMMENT'����',
	PRIMARY KEY ('consumer_id'),
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='�˿ͱ�';

--������ʦ��
CREATE TABLE 'baber' (
	'baber_id' int(11) NOT NULL AUTO_INCREMENT COMMENT '��ʦID',
	'name' varchar(100) NOT NULL COMMENT '��ʦ����',
	'tel_num' varchar(100) NOT NULL COMMENT'�绰',
	'sex' boolen NOT NULL COMMENT'�Ա�',
	'is_working' boolen NOT NULL COMMENT'�Ƿ����ڹ���',
	'store_id' int(11) NOT NULL COMMENT '���ID',
	'password' varchar(100) NOT NULL COMMENT'����',
	'default-working-time-period' varchar(100) NOT NULL COMMENT'Ĭ�Ϲ���ʱ���',
	'actual-working-time-period' varchar(100) NOT NULL COMMENT'ʵ�ʹ���ʱ���',
	PRIMARY KEY ('baber_id'),
	FOREIGN KEY ('store_id') REFERENCES store('store_id') ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='��ʦ��';

--������ұ�
CREATE TABLE 'store' (
	'store_id' int(11) NOT NULL AUTO_INCREMENT COMMENT '���ID',
	'name' varchar(100) NOT NULL COMMENT '�������',
	'id' int(11) NOT NULL COMMENT '��ַID',
	'tel_num' varchar(100) NOT NULL COMMENT'�绰',
	'password' varchar(100) NOT NULL COMMENT'����',
	'detailed_address' varchar(100) NOT NULL COMMENT'��ϸ��ַ',
	PRIMARY KEY ('store_id'),
	FOREIGN KEY ('id') REFERENCES t_prov_city_area_street('id')
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='��ұ�';

--���������
CREATE TABLE 'service' (
	'service_id' int(11) NOT NULL AUTO_INCREMENT COMMENT '����ID',
	'name' varchar(100) NOT NULL COMMENT '��������',
	'price' int(11) NOT NULL COMMENT '����۸�',
	'duration' int(11) NOT NULL COMMENT '����ʱ��',
	'baber_id' int(11) NOT NULL COMMENT '��ʦID',
	PRIMARY KEY ('service_id'),
	FOREIGN KEY ('baber_id') REFERENCES baber('baber_id') ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COMMENT='�����';