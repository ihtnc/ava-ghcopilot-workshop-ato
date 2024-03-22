provider "azurerm" {
    features {}
}

resource "azurerm_resource_group" "example" {
    name     = "ghcp-demo-rg"
    location = "West Europe"
}

resource "azurerm_virtual_network" "example" {
    name                = "ghcp-demo-vnet"
    resource_group_name = azurerm_resource_group.example.name
    location            = azurerm_resource_group.example.location
    address_space       = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "example" {
    name                 = "ghcp-demo-subnet"
    resource_group_name  = azurerm_resource_group.example.name
    virtual_network_name = azurerm_virtual_network.example.name
    address_prefixes     = ["10.0.1.0/24"]
}

resource "azurerm_network_interface" "example" {
    count               = 2
    name                = "ghcp-demo-nic-${count.index}"
    location            = azurerm_resource_group.example.location
    resource_group_name = azurerm_resource_group.example.name

    ip_configuration {
        name                          = "internal"
        subnet_id                     = azurerm_subnet.example.id
        private_ip_address_allocation = "Dynamic"
    }
}

resource "azurerm_linux_virtual_machine" "example" {
    count                 = 2
    name                  = "ghcp-demo-vm-${count.index}"
    resource_group_name   = azurerm_resource_group.example.name
    location              = azurerm_resource_group.example.location
    size                  = "Standard_F2"
    admin_username        = "adminuser"
    network_interface_id  = azurerm_network_interface.example[count.index].id

    os_disk {
        caching              = "ReadWrite"
        storage_account_type = "Standard_LRS"
    }

    source_image_reference {
        publisher = "Canonical"
        offer     = "UbuntuServer"
        sku       = "16.04-LTS"
        version   = "latest"
    }

    admin_ssh_key {
        username   = "adminuser"
        public_key = file("~/.ssh/id_rsa.pub")
    }

    disable_password_authentication = true
}