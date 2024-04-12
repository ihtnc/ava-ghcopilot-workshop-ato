provider "google" {
    credentials = file("<PATH_TO_YOUR_SERVICE_ACCOUNT_JSON>")
    project     = "<YOUR_PROJECT_ID>"
    region      = "us-central1"
}

resource "google_compute_network" "vpc_network" {
    name                    = "ghcp-demo-vpc"
    auto_create_subnetworks = false
}

resource "google_compute_subnetwork" "subnet" {
    name          = "ghcp-demo-subnet"
    ip_cidr_range = "10.0.0.0/16"
    region        = "us-central1"
    network       = google_compute_network.vpc_network.self_link
}

resource "google_compute_instance" "instance" {
    count        = 2
    name         = "ghcp-demo-${count.index}"
    machine_type = "f1-micro"
    zone         = "us-central1-a"

    boot_disk {
        initialize_params {
            image = "debian-cloud/debian-9"
        }
    }

    network_interface {
        subnetwork = google_compute_subnetwork.subnet.self_link

        access_config {
            // Ephemeral IP
        }
    }

    service_account {
        scopes = ["userinfo-email", "compute-ro", "storage-ro"]
    }
}